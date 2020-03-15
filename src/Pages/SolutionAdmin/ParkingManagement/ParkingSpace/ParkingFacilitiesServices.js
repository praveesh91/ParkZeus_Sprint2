import React, { Component } from 'react';
import {Card} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Icon1 from '../../../../Assets/Images/Group1834.svg';
import Icon2 from '../../../../Assets/Images/Group2051.svg';
import Icon3 from '../../../../Assets/Images/Group2052.svg';
import Icon4 from '../../../../Assets/Images/Group2053.svg';
import Icon5 from '../../../../Assets/Images/Group2054.svg';
import Icon6 from '../../../../Assets/Images/Group2055.svg';
import Icon7 from '../../../../Assets/Images/Group2056.svg';
import Icon8 from '../../../../Assets/Images/Component1.svg';
import Icon9 from '../../../../Assets/Images/Component2.svg';
import Icon10 from '../../../../Assets/Images/Component3.svg';
import Icon11 from '../../../../Assets/Images/Component4.svg';
import Icon12 from '../../../../Assets/Images/Component5.svg';


import './ParkingFacilitiesServices.scss';




export default class ParkingFacilitiesServices extends Component {
    render() {
        return (
            <div className="ParkingFacilitiesServices">
                <div className="ParkingFacilitiesServices__wrapper">
                    <div className="ParkingFacilitiesServices__wrapper_left">
                        <Card className="ParkingFacilitiesServices__wrapper_left_heading">
                            <Typography gutterBottom variant="h5" component="h2">
                                Parking Facilities
                            </Typography>
                            </Card>
                            <Card className="ParkingFacilitiesServices__wrapper_left_side">
                            <div>
                                <p><img src={Icon7} alt="facilityImg" />CCTV Survellience</p>
                                <p><img src={Icon1} alt="facilityImg" />Access Automation</p>
                                <p><img src={Icon2} alt="facilityImg" />24 Hrs Service</p>
                                <p><img src={Icon3} alt="facilityImg" />Parking for Specially Enabled</p>
                            </div>
                            <div>
                                <p><img src={Icon4} alt="facilityImg" />CCTV Survellience</p>
                                <p><img src={Icon5} alt="facilityImg" />Access Automation</p>
                                <p><img src={Icon6} alt="facilityImg" />24 Hrs Service</p>
                                
                            </div>
                        </Card>
                    </div>
                    <div className="ParkingFacilitiesServices__wrapper_right">
                        <Card className="ParkingFacilitiesServices__wrapper_left_heading">
                            <Typography gutterBottom variant="h5" component="h2">
                                    Services Nearby
                            </Typography>
                        </Card>
                        <Card className="ParkingFacilitiesServices__wrapper_right_side">
                            <ul>
                                <li><img src={Icon8} alt="servicesIcon" /></li><li>Metro Station</li>
                            </ul>
                            <ul>
                                <li><img src={Icon9} alt="servicesIcon" /></li><li>Auto Stand</li>
                            </ul>
                            <ul>
                                <li><img src={Icon10} alt="servicesIcon" /></li><li>Cab Stand</li>
                            </ul>
                            <ul>
                                <li><img src={Icon11} alt="servicesIcon" /></li><li>Cycle Stand</li>
                            </ul>
                            <ul>
                                <li><img src={Icon12} alt="servicesIcon" /></li><li>Bus Stand</li>
                            </ul>
                            
                        </Card>
                        
                        
                    </div>

                </div>
            </div>
        )
    }
}
