"use client";
import Loading from "@/app/loading";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const containerStyle = {
    width: "100%",
    height: "400px",
    position: "relative",
};

const defaultCenter = {
    lat: 40.4093,
    lng: 49.8671,
};

const MapContainer = ({ selectedBranch, branches }) => {
    const [activeMarker, setActiveMarker] = useState(null);
    const [placeDetails, setPlaceDetails] = useState(null);
    const [infoWindowOffset, setInfoWindowOffset] = useState(null);

    const onMapLoad = (map) => {
        const bounds = new window.google.maps.LatLngBounds();
        branches.forEach(({ latitude, longitude }) => bounds.extend({ latitude, longitude }));
        map.fitBounds(bounds);

        if (window.google) {
            setInfoWindowOffset(new window.google.maps.Size(0, -90));
        }
    };

    const handleMarkerClick = (branch) => {
        if (branch.id === activeMarker) return;
        setActiveMarker(branch.id);

        const service = new window.google.maps.places.PlacesService(document.createElement("div"));
        const request = {
            placeId: branch.placeId,
            fields: ["name", "rating", "url", "geometry", "user_ratings_total", "reviews", "formatted_address"],
        };

        service.getDetails(request, (place, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                setPlaceDetails(place);
            } else {
                setPlaceDetails(null);
            }
        });
    };

    return (
        <LoadScript
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
            libraries={["places"]}
            loadingElement={<Loading />}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={selectedBranch ? { lat: selectedBranch.latitude, lng: selectedBranch.longitude } : defaultCenter}
                zoom={selectedBranch ? 15 : 8}
                options={{ mapTypeControl: false }}
                onLoad={onMapLoad}
                onClick={() => setActiveMarker(null)}
            >
                {branches.map((b) => (
                    <Marker
                        key={b.id}
                        position={{ lat: b.latitude, lng: b.longitude }}
                        onClick={() => handleMarkerClick(b)}
                    >
                        {activeMarker === b.id && infoWindowOffset && (

                            <InfoWindow
                                position={{ lat: b.latitude, lng: b.longitude }}
                                pixelOffset={infoWindowOffset}
                                options={{ disableAutoPan: true }}
                                onCloseClick={() => {
                                    setActiveMarker(null);
                                    setPlaceDetails(null);
                                }}
                            >
                                <div className="flex gap-3">
                                    <div className=" custom-infowindow-content">
                                        <p className="text-sm text-black font-medium">{b?.name}</p>
                                        <p className="text-[#5b5b5b] text-xs font-medium my-2">
                                            {placeDetails?.formatted_address.replace(/Азербайджан/gi, '').trim()}

                                        </p>
                                        {/* 🔹 Əgər placeDetails varsa, reytinq və rəyləri göstər */}
                                        {placeDetails ? (
                                            <>
                                                <p className="text-xs mb-1">
                                                    {placeDetails.rating} ⭐
                                                    <Link href={`https://www.google.com/maps/place/?q=place_id:${b.placeId}&hl=az&gl=az&review=1`}
                                                        className="text-primary font-medium">
                                                        ({placeDetails.user_ratings_total || 0} rəy)
                                                    </Link>
                                                </p>

                                            </>
                                        ) : (
                                            <p className="text-xs italic text-gray-400">Rəylər yüklənir...</p>
                                        )}

                                        <Link
                                            href={`https://www.google.com/maps/place/?q=place_id:${b.placeId}`}
                                            target="_blank"
                                            className="text-primary font-medium text-xs mt-2 inline-block"
                                        >
                                            Daha böyük xəritəyə baxın
                                        </Link>

                                    </div>
                                    <div>
                                        <Link className="text-primary font-medium text-xs mt-2 inline-block"
                                            href={`https://www.google.com/maps/dir//${encodeURIComponent(b?.name + " " + b?.address)}`}
                                            target="_blank">
                                            {/* <Image
                                            width={100}
                                            hegith={50}
                                            src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Arrow-right.svg"
                                            alt="Directions"
                                        /> */}
                                            İstiqamətlər
                                        </Link>
                                    </div>
                                </div>
                            </InfoWindow>
                        )}
                    </Marker>
                ))}
            </GoogleMap>
        </LoadScript >
    );
};

export default MapContainer;
