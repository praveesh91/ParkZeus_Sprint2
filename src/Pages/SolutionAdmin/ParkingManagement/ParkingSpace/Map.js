import React from 'react';
import {GoogleMap, Marker} from 'react-google-maps';
import * as parksData from './../../../../Assets/skateboard-parks.json';

 function Map() {
    return (
        <GoogleMap 
                defaultZoom={13} 
                defaultCenter={{lat : 12.972442, lng: 77.580643 }} 
            >
                 {parksData.features.map(park => (
                                        <Marker 
                                            key={park.properties.PARK_ID}
                                            position={{
                                                lat: park.geometry.coordinates[1],
                                                lng: park.geometry.coordinates[0]
                                            }}
                                            />

                                    ))}
        </GoogleMap>
    )
}



export default Map;
