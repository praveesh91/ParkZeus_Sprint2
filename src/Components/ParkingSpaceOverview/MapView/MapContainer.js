import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import {Grid, IconButton, Card, CardContent, CardHeader} from '@material-ui/core/';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Popup from './Popup'
import VerifiedLabel from '../ParkingOverview/StatusLabel/VerifiedLabel';
import axios from 'axios'
import './MapContainer.scss'
// import '../ParkingOverview/ViewContainer.scss'
import marker from '../../../Assets/Images/pin.png'

class MapContainer extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            stores: [],
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}, 
        }
    }
    componentDidMount(){
        axios.get("https://praveesh91.github.io/test_json/mapData.json")
        .then(response =>{
            const data = response.data.stores;
            this.setState({
                stores:data
            })
        })
        
    }

    onMarkerClick = (props, marker, e) =>
        this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
        });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
        this.setState({
            showingInfoWindow: false,
            activeMarker: null
        })
        }
    };

    displayMarkers = () => {
        return this.state.stores.map((store, index) => {
          return <Marker 
            key={index} 
            id={index} 
            position={{
                lat: store.latitude,
                lng: store.longitude
            }}
            icon={{
                url: marker,
              }}
              onClick={this.onMarkerClick}
              name={'Current location'} />
        })
      }

render() {
    return (
        <div className='mapContainer'>
            <Map
                google={this.props.google}
                onClick={this.onMapClicked}
                zoom={9}
                initialCenter={{ lat: 47.444, lng: -122.176}}>
                {this.displayMarkers()}

                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                    <Grid container>
                        {/* <Grid item xs={6}>
                            <p>IBM Corporate Space</p>
                        </Grid>
                        <Grid item xs={6}>
                            <IconButton><MoreVertIcon /></IconButton>
                        </Grid>
                        <Grid item xs={12}>
                            <VerifiedLabel />    
                        </Grid>
                        <Grid item xs={6}>Space</Grid>
                        <Grid item xs={6}>Occupied</Grid> */}
                        <Grid item xs={12}>
                        <Card className="cust-card">
                        <CardHeader
                            action={
                                <div>
                                    <IconButton><MoreVertIcon /></IconButton>
                                </div>
                            }
                            title="IBM Corporate Space"
                            titleTypographyProps={{ variant:"title", component:"h4" }}
                            // avatar={
                            //     <Avatar>
                            //       <img src={live} alt="add people" />
                            //     </Avatar>
                            //   }
                            />
                            
                            <CardContent>
                            <VerifiedLabel/>
                            {/* <img className="verified-image" src={verified} alt="label" /> */}
                            <div style={{marginTop:'25px'}}>
                            <div className="info-container-map">
                                <div className="status-map">
                                    <b>Occupied</b>
                                    <p>10</p>
                                </div>
                                <div className="status-map">
                                    <b>Vacant</b>
                                    <p>20</p>
                                </div>
                            </div>
                            <div className="info-container-map">
                                <div className="status-map">
                                    <b>Booked</b>
                                    <p>12</p>
                                </div>
                                <div className="status-map">
                                    <b>Unavailable</b>
                                    <p>9</p>
                                </div>
                            </div>
                            </div>
                            </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </InfoWindow>

            </Map>
            
        </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCq1D3cnZycxn5PCwiahpHscgep3yoN35U'
})(MapContainer);


// import React, {Component} from 'react';
// import GoogleMapReact from "google-map-react";
// import axios from 'axios'

// import Popup from './Popup'

// import marker from '../../../Assets/Images/pin.png'

// const googleAPIKey = "AIzaSyCq1D3cnZycxn5PCwiahpHscgep3yoN35U";

// const markerStyle = {
//   position: "absolute",
//   top: "100%",
//   left: "100%",
//   cursor: "pointer",
//   transform: "translate(-50%, -100%)"
// };

// class MapContainer extends Component {

//     constructor(props) {
//         super(props)
    
//         this.state = {
//             stores: [],
//             center: {
//                 lat: 47.2, 
//                 lng: -122 
//             },
//             zoom: 9,
//             showPopup: false
//         }
//     }

//     handleMarkerClick = () =>{
//         this.setState({  
//             showPopup: !this.state.showPopup  
//        });  
//     }

//     componentDidMount(){
//         axios.get("https://praveesh91.github.io/test_json/mapData.json")
//         .then(response =>{
//             const data = response.data.stores;
//             this.setState({
//                 stores:data
//             })
//         })    
//     }

//     render() {

//         const Marker = () => {

//             return (
//                 <GoogleMapReact
//                     bootstrapURLKeys={{ key: googleAPIKey }}
//                     yesIWantToUseGoogleMapApiInternals={true}
//                     defaultZoom={this.state.zoom}
//                     defaultCenter={this.state.center}
//                 >
//                     {this.state.stores.map(item => {
//                         return (
//                             <div 
//                                 lat={item.latitude} 
//                                 lng={item.longitude} 
//                                 onClick={() => {this.handleMarkerClick()}}>
//                                 <img style={markerStyle} src={marker} alt="pin" />
//                             </div>
//                         );
//                     })}
//                 </GoogleMapReact>
//             );
//         };
  

//         return (
//             <div style={{ height: '100vh', width: '100%' }}>
//                 {<Marker />}
//                 {this.state.showPopup ?  
//                     <Popup  
//                         text='Click "Close Button" to hide popup'  
//                         // closePopup={this.togglePopup.bind(this)}  
//                     />  
//                     : null  
//                 }
                
//             </div>
//             );
//         }
//     }

// export default MapContainer;