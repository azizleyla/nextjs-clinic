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
    // InfoWindow-un offset dəyərini tutmaq üçün state istifadə edirik
    const [infoWindowOffset, setInfoWindowOffset] = useState(null);

    // Xəritə yükləndikdə çağırılır
    const onMapLoad = (map) => {
        // Xəritə yükləndikdən sonra google obyektinin mövcud olduğundan əmin oluruq
        if (window.google) {
            // Sola (-150) və bir qədər yuxarı (-50) offset dəyərini təyin edirik
            setInfoWindowOffset(new window.google.maps.Size(-150, -50));
        }
    };

    return (
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY} loadingElement={<Loading />}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={selectedBranch ? { lat: selectedBranch.lat, lng: selectedBranch.lng } : defaultCenter}
                zoom={selectedBranch ? 12 : 8}
                options={{
                    mapTypeControl: false,
                }}
                mapTypeId="roadmap"
                onLoad={onMapLoad} // Xəritə yükləndikdə onMapLoad çağırılır
            >
                {/* Bütün filialların markerləri */}
                {!selectedBranch &&
                    branches.map((b) => (
                        <Marker key={b.id} position={{ lat: b.lat, lng: b.lng }} />
                    ))}

                {/* Seçilmiş Filial Markeri */}
                {selectedBranch && (
                    <Marker
                        animation={window.google?.maps.Animation.DROP}
                        position={{ lat: selectedBranch.lat, lng: selectedBranch.lng }}
                    />
                )}
                <div>
                    {/* InfoWindow - Yalnız seçilmiş filial varsa VƏ offset dəyəri mövcuddursa göstər */}
                    {selectedBranch && infoWindowOffset && (
                        <InfoWindow
                            // State-də təyin edilmiş ofseti istifadə edirik
                            pixelOffset={infoWindowOffset}
                            options={{ disableAutoPan: true }}
                            position={{ lat: selectedBranch.lat, lng: selectedBranch.lng }}
                        >
                            <div className="p-2 info custom-infowindow-content">
                                <h3 className="font-semibold mb-1 text-sx">{selectedBranch.name}</h3>
                                <p className="text-xs mb-2">{selectedBranch.address}</p>
                                <p className="text-xs">{selectedBranch.rating} ⭐ ({selectedBranch.reviews} rəylər)</p>
                                {/* Daha böyük xəritəyə baxın linki */}
                                <a
                                    href={selectedBranch?.mapLink}
                                    target="_blank"
                                    className="text-primary font-medium text-xs my-2 inline-block"
                                >
                                    Daha böyük xəritəyə baxın
                                </a>
                                {/* İstiqamətləri əldə edin linki */}
                                <a
                                    href={selectedBranch?.directionsLink}
                                    target="_blank"
                                    className="text-primary font-medium text-xs  ml-2"
                                >
                                    İstiqamətlər
                                </a>
                            </div>
                        </InfoWindow>
                    )}
                </div>
            </GoogleMap>
        </LoadScript>
    )
}

export default MapContainer