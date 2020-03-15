import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import {CardContent, CardHeader, Card, IconButton, Button} from '@material-ui/core';

import CardView from './CardView'
import ListView from './ListView'
import MapContainer from '../MapView/MapContainer'

import outside from '../../../Assets/Images/outside.png'
import offline from '../../../Assets/Images/offline.png'
import live from '../../../Assets/Images/live.png'
import cardviewIcon from '../../../Assets/Images/card view deactive.png'
import listviewIcon from '../../../Assets/Images/list view deactive.png'
import mapviewIcon from '../../../Assets/Images/map view deactive.png'
import cardviewIconActive from '../../../Assets/Images/card view active.png'
import listviewIconActive from '../../../Assets/Images/list view active.png'
import mapviewIconActive from '../../../Assets/Images/map view active.png'

import './ViewContainer.scss'


export class ViewContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             listType: false,
             CardType: true,
             mapType: false,
        }
    }

    handleCard(e){
        this.setState(() => ({
            listType: false,
            CardType: true, 
            mapType: false
        }));
        // e.preventDefault();
    }

    handleList(e){
        this.setState(() => ({
            CardType: false,
            listType: true,
            mapType: false 
        }));
        // e.preventDefault();
    }

    handleMap(e){
        this.setState(() => ({
            CardType: false,
            listType: false,
            mapType: true ,
        }));
        // e.preventDefault();
    }
    
    render() {
        const listType = this.state.listType;
        const CardType = this.state.CardType;
        const mapType = this.state.mapType;

        // const viewType = this.state.viewType;
        // console.log("viewType",viewType)
        return (
                
                    <Card raised={true} className='card-cont'>

                        <CardHeader
                            action={
                                <div>
                                    <IconButton onClick = {()=> {this.handleCard()}}><img src={CardType ? cardviewIconActive:cardviewIcon} style={{width:'15px'}} alt="icon"/></IconButton>
                                    <IconButton onClick = {()=> {this.handleList()}}><img src={listType ? listviewIconActive:listviewIcon} style={{width:'15px'}} alt="icon"/></IconButton>
                                    <IconButton onClick = {()=> {this.handleMap()}}><img src={mapType ? mapviewIconActive:mapviewIcon} style={{width:'15px'}} alt="icon"/></IconButton>
                                </div>
                            }
                            title="Parking Space Overview"
                            titleTypographyProps={{variant:'h6' }}
                            />
                        <CardContent>
                        <Scrollbars
                            autoHide 
                            style={{ height: 450 }}>

                            {listType && <ListView/>}
                            {CardType && <CardView/>}
                            {mapType && <MapContainer/>}
                        </Scrollbars>

                            <div className="card-footer">
                                <Button variant="contained" color="primary">View All Locations</Button>
                                <div className="legend-cont">
                                    <div className="legend">
                                        <img src={live} alt="logo" /><span>Live and open</span>
                                    </div>
                                    <div className="legend">
                                        <img src={offline} alt="logo" /><span>Outside Operating Hours</span>
                                    </div>
                                    <div className="legend">
                                        <img src={outside} alt="logo" /><span>Offline / Deactivated</span>
                                    </div>
                                </div>

                            </div>
                        </CardContent>
                    </Card>

        )
    }
}

export default ViewContainer
