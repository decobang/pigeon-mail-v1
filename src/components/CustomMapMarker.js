import React from 'react';
import { Marker } from 'react-leaflet';
import { Icon } from 'leaflet';
import styles from '../styles/CustomMapMarker.module.css';
import icon from '../assets/icons/map-pin-icon.png'; // Import the icon

const markerIcon = new Icon({
    iconUrl: icon, // Use the imported icon
    iconSize: [50, 50],
});

function MarkerComponent({ position }) {
    return <Marker position={position} icon={markerIcon}/>;
}

export default MarkerComponent;