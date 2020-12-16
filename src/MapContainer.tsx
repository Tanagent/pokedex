import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapStyles = {
	height: "500px",
	width: "500px",
};

const defaultCenter = {
	lat: 32.8,
	lng: -117.1,
};

const MapContainer = (props: any) => {
    return (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API || ''}>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={10}
                center={defaultCenter}
            >
                {props.loc.map((item: any, index: number) => {
                    return <Marker key={index} position={item} />;
                })}
            </GoogleMap>
        </LoadScript>
    );
}

export default MapContainer;