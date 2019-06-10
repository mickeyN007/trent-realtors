import React, { Component } from 'react'

import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

export default class Maps extends Component {
   render() {
      const MapWithAMarker = withGoogleMap(props =>
         <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 10.2510938, lng: 8.4390718 }}
         >
            <Marker
               position={{ lat: 8.9279214, lng: 6.5597871 }}
            />
         </GoogleMap>
      );
      return (
         <MapWithAMarker
            containerElement={<div style={{ marginTop: '3%', zIndex: 1, height: `600px` }} />}
            mapElement={<div style={{ position: 'fixed', zIndex: 1, height: `90%`, width: `100%` }} />}
         />
      )
   }
}
