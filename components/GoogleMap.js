"use client"
import Loading from '@/app/loading'
import { branches } from '@/constants/branches';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import React, { useState } from 'react'

const containerStyle = {
    width: '100%',
    height: '400px',
    position: "relative"
};
const defaultCenter = {
    lat: 40.4093,
    lng: 49.8671,
};

const MapContainer = ({ selectedBranch }) => {
    const [activeMarker, setActiveMarker] = useState(null);
    const [infoWindowOffset, setInfoWindowOffset] = useState(null);

    const onMapLoad = (map) => {
        // Bounds yaratmaq üçün bütün filialları istifadə edirik
        const bounds = new window.google.maps.LatLngBounds();
        branches.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
        map.fitBounds(bounds);

        // InfoWindow offset-i təyin edirik
        if (window.google) {
            setInfoWindowOffset(new window.google.maps.Size(0, -40)); // markerin üstündə açılması üçün
        }
    };

    const handleMarkerClick = (id) => {
        if (id === activeMarker) return;
        setActiveMarker(id);
    };

    return (
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY} loadingElement={<Loading />}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={selectedBranch ? { lat: selectedBranch.lat, lng: selectedBranch.lng } : defaultCenter}
                zoom={selectedBranch ? 12 : 8}
                options={{ mapTypeControl: false }}
                mapTypeId="roadmap"
                onLoad={onMapLoad}
                onClick={() => setActiveMarker(null)}
            >

                {branches.map((b) => (
                    <Marker
                        key={b.id}
                        position={{ lat: b.lat, lng: b.lng }}
                        onClick={() => handleMarkerClick(b.id)}
                    >
                        {selectedBranch && infoWindowOffset && (
                            <InfoWindow
                                position={{ lat: b.lat, lng: b.lng }}
                                pixelOffset={infoWindowOffset}
                                options={{ disableAutoPan: true }}
                                onCloseClick={() => setActiveMarker(null)}
                            >
                                <div className="p-2 info custom-infowindow-content">
                                    <h3 className="font-semibold mb-1 text-sx">{b.name}</h3>
                                    <p className="text-xs mb-2">{b.address}</p>
                                    <p className="text-xs">{b.rating} ⭐ ({b.reviews} rəylər)</p>
                                    <a
                                        href={b?.mapLink}
                                        target="_blank"
                                        className="text-primary font-medium text-xs my-2 inline-block"
                                    >
                                        Daha böyük xəritəyə baxın
                                    </a>
                                    <a
                                        href={b?.directionsLink}
                                        target="_blank"
                                        className="text-primary font-medium text-xs ml-2"
                                    >
                                        İstiqamətlər
                                    </a>
                                </div>
                            </InfoWindow>
                        )}
                    </Marker>
                ))}
            </GoogleMap>
        </LoadScript>
    )
}

export default MapContainer
