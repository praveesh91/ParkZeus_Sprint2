import React, { Component, Fragment } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import { Card } from '@material-ui/core';
import './ParkingSpaceListView.scss';
import {Link} from 'react-router-dom';




class ParkingSpaceListView extends Component {


    state = {
        parkings : []
    }
    
    componentDidMount(){

        axios.get('https://reone.beta.webenza.in/property/')
        .then( response => {
            //console.log(response);
            this.setState({parkings : response.data});

        })
    }

    render(props) {

        const parkings = this.state.parkings;
        console.log(parkings)
        
        return (
            <Fragment>
                <div className='listview'>
                    <div className='listview__wrapper'>
                    <Card>
                    <TableContainer component={Paper} >
                        <Table aria-label="simple table">
                        <TableHead className="listview__wrapper_header">
                            <TableRow>
                                <TableCell>Parking Space Name</TableCell>
                                <TableCell align="left">Status</TableCell>
                                <TableCell align="left">Type</TableCell>
                                <TableCell align="left">Operation Time</TableCell>
                                <TableCell align="left">Tariff</TableCell>
                                <TableCell align="left">Address</TableCell>
                                <TableCell align="left">Actions</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    parkings.map(parking => (
                                    
                                    <TableRow>
                                        <TableCell component="th" scope="row">{parking.name}</TableCell>
                                        <TableCell align="left" style={{color:'orange'}}>Request Submitted</TableCell>
                                        <TableCell align="left">Commercial</TableCell>
                                        <TableCell align="left">10.00 am - 8.00 pm</TableCell>
                                        <TableCell align="left">Rs. 10/- per hour</TableCell>
                                        <TableCell align="left">loreum ipsum, 1st ma...</TableCell>
                                        <Link to={'/parking-details/' +parking.id} style={{ textDecoration: 'none' }}>
                                        <TableCell align="left" style={{color:'blue'}}>View</TableCell>
                                        </Link>
                                    </TableRow>
                                        
                                    ))
                                }
                                
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Card>
                    </div>  
                </div>
                
            </Fragment>
        )
    }
}


export default ParkingSpaceListView
