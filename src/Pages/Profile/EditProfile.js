import React, { useState } from 'react'
import {CardContent, Link, CardHeader, TextField, Card, IconButton, Button, Grid, Container} from '@material-ui/core';

import Modal from './Modal'

import Avatar from '@material-ui/core/Avatar';
import './Profile.scss'

import edit from '../../Assets/Images/edit.png'
// import avatar from '../../Assets/Images/avatar.png'

export default function EditProfile() {

    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [contact, setContact] = useState("");
    const [email, setemail] = useState("");
    const [verifyPwd, setverifyPwd] = useState("");
   
        return (
                <Container style={{paddingTop: '2em'}}>
                    <Card raised={true}>

                            <CardHeader
                                id="headerColor"
                                title="Edit Profile"
                                titleTypographyProps={{variant:'h6' }}
                                />
                            <CardContent>
                                <Grid container spacing={1} className="padding-btm">
                                    <Grid item md={3} sm={12}>
                                        <Avatar variant="square" src='https://via.placeholder.com/50' className="picture">
                                        </Avatar>
                                        <div className="pwdLink" style={{paddingTop:0, paddingLeft:'45px'}}>
                                            <Link>Change Photo</Link>
                                        </div>
                                    </Grid>
                                    <Grid item md={9} sm={12}>
                                        <Grid container>
                                            <Grid item md={6} sm={12}>
                                                <div className='role'>
                                                    <p>Role : </p>
                                                    <p>Parking Solution Admin</p>
                                                </div>
                                                <div className="boxes">
                                                <p>First Name *</p>
                                                <input
                                                    className="inputBox"
                                                    type="text"
                                                    value={firstName}
                                                    onChange={e => setfirstName(e.target.value)}
                                                />
                                                </div>
                                                <div className="boxes">
                                                <p>Contact Number *</p>
                                                <input
                                                    className="inputBox"
                                                    type="text"
                                                    value={contact}
                                                    onChange={e => setContact(e.target.value)}
                                                />
                                                </div>
                                            </Grid>
                                            <Grid item md={6} sm={12}>
                                                <div className='company'>
                                                    <p>Company : </p>
                                                    <p>Robert Bosch India Pvt Ltd</p>
                                                </div>
                                                <div className="boxes">
                                                <p>Last Name *</p>
                                                <input
                                                    className="inputBox"
                                                    type="text"
                                                    value={lastName}
                                                    onChange={e => setlastName(e.target.value)}
                                                />
                                                </div>
                                                <div className="boxes">
                                                    <p>Contact Email *</p>
                                                    <input
                                                        className="inputBox"
                                                        type="text"
                                                        value={email}
                                                        onChange={e => setemail(e.target.value)}
                                                    />
                                                </div>
                                                <div className="buttonContainer">
                                                    <Button className="pwdbtn">
                                                        Update
                                                    </Button>
                                                    <Button className="revert">
                                                        Revert
                                                    </Button>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
        
                            </CardContent>
                        </Card>
                </Container>
        )
}

