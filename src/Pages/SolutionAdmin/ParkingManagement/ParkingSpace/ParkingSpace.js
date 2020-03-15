import React, { Component } from 'react';
import axios from 'axios';
import Parking from './Parking';
import './ParkingSpace.scss';




export default class ParkingSpace extends Component {

    state = {
        parkings : [],
        selectedParkingId : null
    }

    componentDidMount(){

        axios.get('https://reone.beta.webenza.in/property/')
        .then( response => {
            //console.log(response);
            this.setState({parkings : response.data});

        })
    }
    parkingSelectHandeler = (id) => {

        this.setState({selectedParkingId : id});
        

    }
    render() {
        
        const parkings = this.state.parkings.map( parking => {
            return ( 
                 
                <Parking 
                        id = {parking.id}
                        title={parking.name} 
                        address={parking.description} 
                        update={parking.updated_on} 
                        created={parking.created_on} 
                        {...this.props}
                        verified={parking.published.toString()}
                        clicked= { () => this.parkingSelectHandeler(parking.id)}
                        /> 
                        
               
            )
        }) 

        return ( 
            <div className="parkingSpace">
                <div className="parkingSpace__wrapper">

                 {parkings} 
                
                </div>
                
                
            </div>
        )
    }
}
