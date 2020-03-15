import React , {Component, Fragment}from 'react';
import ParkingSpaceListView from './ParkingManagement/ParkingSpace/ParkingSpaceListView';
import ParkingSpace from './ParkingManagement/ParkingSpace/ParkingSpace';
import ParkingSpaceMapView from './ParkingManagement/ParkingSpace/ParkingSpaceMapView';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Map from '@material-ui/icons/Map';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import './ParkingManagement/ParkingSpace/ParkingSpace.scss';
import Routes from './ParkingManagement/Routes';



export default class SolutionAdmin extends Component {

     

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

                        <ButtonGroup className="parkingmodule-navbar__wrapper_button" color="secondary" aria-label="outlined secondary button group">
                            <Button id="one" className="parkingmodule-navbar__wrapper_button_active" value={this.state.card} onClick={() => this.changeHandler("one")} ><ViewModuleIcon color="action"/></Button>
                            <Button id="two" value={this.state.list} onClick={() => this.changeHandler("two")}><FormatListBulletedIcon color="action" /></Button>
                            <Button id="three" value={this.state.map} onClick={() => this.changeHandler("three")}><Map color="action" /></Button>
                        </ButtonGroup>

                       


                    </div>
                </div>
                {print()}
            </Fragment>
        )
    }
}


