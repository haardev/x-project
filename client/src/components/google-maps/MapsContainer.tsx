import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import GoogleMapReact from 'google-map-react';

const MapsContainer = (props: any) => {
    const mapStyles = {
        width: '100%',
        height: '100%',
    };

    const renderMakers = () => {
        return props.markers.map((store, index) => {
            return <Marker key={ index }
                           onMouseover={ () => alert('hello') }
                           mapCenter={ {lat: store.latitude, lng: store.longitude} }
                           onClick={ () => console.log("You clicked me!") }/>
        })

    };
    return (
        <div className="google-map__container">
            {/*            <Map google={ props.google }
                 style={ mapStyles }
                 initialCenter={ {lat: 51.441643, lng: 5.469722} }>
            </Map>*/ }
            <GoogleMapReact
                bootstrapURLKeys={ {key: 'AIzaSyD3QSt9rwMBflRBovuBS2vvldp4DVjdynU'} }
                defaultZoom={ 8 } />
        </div>
    );
};

/*
export default GoogleApiWrapper({
    apiKey: 'AIzaSyD3QSt9rwMBflRBovuBS2vvldp4DVjdynU'
})(MapsContainer);
*/
export default MapsContainer;
