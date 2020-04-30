import React, { Component } from 'react'
import axios from 'axios'
import {Grid, Card, CardContent, CardHeader} from '@material-ui/core/';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import VerifiedLabel from './StatusLabel/VerifiedLabel';

import verified from '../../../Assets/Images/verified tag.png'
import live from '../../../Assets/Images/live.png'


import './ViewContainer.scss'

class CardView extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             cardData: []
        }
    }
    componentDidMount(){
        axios.get("https://praveesh91.github.io/test_json/overviewData.json")
            .then(res =>{
                const data = res.data.parkingOverview;
                this.setState({cardData:data})
            })
    }
    render() {
        return (
            <Grid container>
                    {this.state.cardData.map((e) => (
   
                        <Grid item xs={6} m={2}>
                        <Card className="cust-card" style={{backgroundColor:'#ededed', margin:"5px"}}>
                        <CardHeader
                            action={
                                <div>
                                    <IconButton><MoreVertIcon /></IconButton>
                                </div>
                            }
                            title={e.spaceName}
                            titleTypographyProps={{ variant:"title", component:"h4" }}
                            avatar={
                                <Avatar>
                                  <img src={live} alt="add people" />
                                </Avatar>
                              }
                            />
                            
                            <CardContent>
                            <VerifiedLabel/>
                            {/* <img className="verified-image" src={verified} alt="label" /> */}
                            <div className="info-container mb-2 mt-2">
                                <div className="status">
                                    <b>Occupied</b>
                                    <p>{e.status.Booked}</p>
                                </div>
                                <div className="status">
                                    <b>Vacant</b>
                                    <p>{e.status.Vacant}</p>
                                </div>
                                <div className="status">
                                    <b>Booked</b>
                                    <p>{e.status.Occupied}</p>
                                </div>
                                <div className="status">
                                    <b>Unavailable</b>
                                    <p>{e.status.Unvailable}</p>
                                </div>
                            </div>
                            </CardContent>
                            </Card>
                        </Grid>
                            

                    ))}
                
                </Grid>
            
        )
    }
}

export default CardView
