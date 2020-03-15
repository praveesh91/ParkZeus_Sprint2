import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class AddParking extends Component {
    render() {
        return (
            <div>
                <h4>You don't have any parking space added to your account.</h4>
                <Link to="/addnewparking"><button color="primary">Add Parking</button></Link>
            </div>
        )
    }
}
