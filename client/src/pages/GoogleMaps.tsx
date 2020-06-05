import React from 'react';
import MapsContainer from "../components/google-maps/MapsContainer";

const GoogleMaps = () => {
    const markers = [{lat: 51.442501, lng: 5.471807}]
    return (
        <div className="google-maps-page">
            <h1>Find my work</h1>
            <MapsContainer markers={ markers }/>
        </div>
    );
};

export default GoogleMaps;
