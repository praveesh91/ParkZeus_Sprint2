import React , { Component, Fragment} from 'react';
import {withScriptjs, withGoogleMap} from 'react-google-maps';
import { Card } from '@material-ui/core';
import './ParkingSpaceMapView.scss';
import Map  from './Map';


const WrappedMap = withScriptjs(withGoogleMap(Map));
 
class ParkingSpaceMapView extends Component {
  render() {
    return (
        <Fragment>
            <div className='mapview'>
                    <div className='mapview__wrapper'>
                        <Card>
                            <WrappedMap 
                                googleMapURL= {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCq1D3cnZycxn5PCwiahpHscgep3yoN35U`}
                                loadingElement={<div style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `400px` }} />}
                                mapElement={<div style={{ height: `100%` }} />}
                                
                                   
                                />
                        </Card>
                    </div>
                </div>
      </Fragment>
    );
  }
}
 
export default ParkingSpaceMapView;
