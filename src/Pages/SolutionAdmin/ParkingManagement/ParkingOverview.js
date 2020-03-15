import React, { Component, Fragment } from 'react';
import ParkingSpaceListView from './ParkingSpace/ParkingSpaceListView';
import ParkingSpaceMapView from './ParkingSpace/ParkingSpaceMapView';
import ParkingSpace from './ParkingSpace/ParkingSpace';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Map from '@material-ui/icons/Map';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import './ParkingSpace/ParkingSpace.scss';


export default class ParkingOverview extends Component {
    state = {
        card:true,
        list:false,
        map:false

    }

    changeHandler = (id) => {

        if (id === 'one'){
            this.setState({
                card:true,
                list:false,
                map:false
               
            })}

            if (id === 'two'){
                this.setState({
                    card:false,
                    map:false,
                    list:true
                   
                })
            }

                if (id === 'three'){
                    this.setState({
                        card:false,
                        list:false,
                        map:true
                       
                    })
                }



        }

        

        
    


    render() {

        let {card, list, map } = this.state;

        const print = () => {
            console.log('hi')
            if(card === true){
                return <ParkingSpace />
            }
            if(list=== true){
                return <ParkingSpaceListView />
            }
            if(map === true){
                return <ParkingSpaceMapView />
            }
        }

        return (
            <Fragment>

               
                
                <div className="parkingmodule-navbar">
                    <div className="parkingmodule-navbar__wrapper">
                        <div className="parkingmodule-navbar__wrapper_nav">
                            <Button variant="contained" color="primary" className="parkingmodule-navbar__wrapper_nav_addparking">
                            List A Parking Space +</Button>
                            <ButtonGroup className="parkingmodule-navbar__wrapper_button" color="secondary" aria-label="outlined secondary button group">
                                <Button id="one" className="parkingmodule-navbar__wrapper_button_active" value={this.state.card} onClick={() => this.changeHandler("one")} ><ViewModuleIcon color="action"/></Button>
                                <Button id="two" value={this.state.list} onClick={() => this.changeHandler("two")}><FormatListBulletedIcon color="action" /></Button>
                                <Button id="three" value={this.state.map} onClick={() => this.changeHandler("three")}><Map color="action" /></Button>
                            </ButtonGroup>
                        </div>
                       

                       


                    </div>
                </div>
                {print()}

                
            </Fragment>
        )
    }
}