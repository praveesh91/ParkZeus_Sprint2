import React, { Component } from 'react'
import {CardContent, Link, CardHeader, Card, IconButton, Button, Grid, Container} from '@material-ui/core';

import Modal from './Modal'

import Avatar from '@material-ui/core/Avatar';
import './Profile.scss'

import edit from '../../Assets/Images/edit.png'
// import avatar from '../../Assets/Images/avatar.png'

class Profile extends Component {

    modalRef = ({handleShow}) => {
        this.showModal = handleShow;
    }
    
    onLoginClick = () => {
    this.showModal();
    }

    render() {
        return (
                <Container style={{paddingTop: '2em'}}>
                    <Card raised={true}>

                            <CardHeader
                                id="headerColor"
                                action={
                                    <div className="topPad">
                                        <Link to = "/edit"><IconButton className="editButton" onClick = {()=> {}}><img src={edit} alt="icon"/><span style={{paddingLeft: '10px'}}>Edit</span></IconButton></Link>
                                    </div>
                                }
                                title="User Profile"
                                titleTypographyProps={{variant:'h6' }}
                                />
                            <CardContent>
                                <Grid container spacing={1} >
                                    <Grid item md={4} sm={12}>
                                        <Avatar variant="square" src='https://via.placeholder.com/50' className="picture">
                                        </Avatar>
                                        <div className="btnContainer">
                                            <Button variant="contained" color="secondary">Logout</Button>
                                        </div>
                                    </Grid>
                                    <Grid item md={8} sm={12}>
                                        <p className="profileName">Jean Donas</p>
                                        <div className="info">
                                            <div className="left">
                                                <p>Role</p>
                                                <p>Comapany</p>
                                                <p>Username</p>
                                                <p>Contact Number</p>
                                                <p>Contact Email</p>
                                            </div>
                                            <div className="right">
                                                <p>: Parking Solution Admin</p>
                                                <p>: Robert Bosch India Pvt Ltd</p>
                                                <p>: ABCB</p>
                                                <p>: +91 986267289</p>
                                                <p>: jeandonas@ibm.com</p>
                                            </div>
                                        </div>
                                        <Modal>
                                            {/* <div className="pwdLink">
                                                <Link onClick={this.onLoginClick}>Change Password</Link>
                                            </div> */}
                                        </Modal>
                                    </Grid>
                                </Grid>
        
                            </CardContent>
                        </Card>
                </Container>
        )
    }
}

export default Profile
