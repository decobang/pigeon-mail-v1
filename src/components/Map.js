import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MapComponent() {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLocation([position.coords.latitude, position.coords.longitude]);
        }, () => {
            // If user denies location permission, we can set a default location
            setLocation([51.505, -0.09]);
        });
    }, []);

    if (!location) {
        return <div>Loading...</div>;
    }

    return (
        <MapContainer center={location} zoom={13} style={{ height: "100vh", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={location} />
        </MapContainer>
    );
}

export default MapComponent;