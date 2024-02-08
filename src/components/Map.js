import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MarkerComponent from './CustomMapMarker';

function MapComponent() {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        if (!navigator.geolocation) {
            console.log("Geolocation is not supported by your browser");
            return;
        }

        const watchId = navigator.geolocation.watchPosition((position) => {
            setLocation([position.coords.latitude, position.coords.longitude]);
        }, (error) => {
            console.log(error);
            setLocation([51.505, -0.09]); // If there's an error, set a default location
        });

        // Clean up the geolocation watch when the component is unmounted
        return () => navigator.geolocation.clearWatch(watchId);
    }, []);

    if (!location) {
        return <div>Loading...</div>;
    }

    return (
        <MapContainer center={location} zoom={20} style={{ height: "100vh", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <MarkerComponent position={location} />
        </MapContainer>
    );
}

export default MapComponent;