import React, { Component } from 'react';
import axios from 'axios';
import './ParkingDetails.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Card, Paper } from '@material-ui/core';
import SlotCount from './SlotCount';
import OperationTimings from './OperationTimings';
import ParkingFacilitiesServices from './ParkingFacilitiesServices';
import MapImg from '../../../../Assets/Images/mapimg.jpeg';
import Ratingsandreviews from './Ratingsandreviews';
import Button from '@material-ui/core/Button';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import AssignmentIcon from '@material-ui/icons/Assignment';
import VarifideImg from '../../../../Assets/Images/verified tag.png'



 class ParkingDetails extends Component {

    state = {
        parkingDetail : []
    }
    

    componentDidMount () {
       
                if(this.props.match.params.id){
                    if(!this.state.parkingDetail || (this.state.parkingDetail && this.state.parkingDetail.id !== this.props.match.params.id))
                    axios.get('https://reone.beta.webenza.in/property/' + this.props.match.params.id)
                        .then( response => {
                        console.log(response.data);
                        this.setState({parkingDetail : response.data});
                
                    });
                }
        }


    render(props) {

        
        
        let parking = <p style={{textAlign:"center"}}>Please select A Parking</p>

        const parkingDetail = this.state.parkingDetail

        if(this.state.parkingDetail){
            
            parking = (
                <div className="DetailParking">
                    <div className="DetailParking__wrapper">
                        <div className="DetailParking__wrapper_title">
                            <p className="DetailParking__wrapper_title_parking-name">{parkingDetail.name} <img src={VarifideImg} alt="img" /></p>
                            <div className="DetailParking__wrapper_title_actions">
                                <Button variant="contained" className="DetailParking__wrapper_title_actions_deactivate" >Deactivate</Button>
                                <Button variant="contained" className="DetailParking__wrapper_title_actions_edit" onClick={()=> alert('clicked')}>
                                    <AssignmentIcon /> Edit
                                </Button>
                                <Button variant="contained" className="DetailParking__wrapper_title_actions_delete">
                                <DeleteOutlinedIcon />Delete
                                </Button>

                            </div>
                        </div>
                        <Paper>

                        <div className="DetailParking__wrapper_basicdetails">
                            <div className="DetailParking__wrapper_basicdetails_left">
                                <Card>
                                    <Carousel className="DetailParking__wrapper_basicdetails_left_carousel-box">
                                            <div className="carousel__images" >
                                                <img  src={parkingDetail.image} alt="img1" />
                                            </div>
                                            <div>
                                                <img  src={parkingDetail.image} alt="img2" />
                                            </div>
                                            <div>
                                                <img  src={parkingDetail.image} alt="img3" />
                                            </div>
                                    </Carousel>
                                </Card>
                            </div>
                            
                        <div className="DetailParking__wrapper_basicdetails_right">
                            <div className="DetailParking__wrapper_basicdetails_right_address">
                                <div className="DetailParking__wrapper_basicdetails_right_address_map">
                                    <img src={MapImg} alt="map-img" />

                                </div>
                                <div className="DetailParking__wrapper_basicdetails_right_address_text">
                                    <p className="DetailParking__wrapper_basicdetails_right_address_text_heading"><b>Address</b></p>
                                    <p className="DetailParking__wrapper_basicdetails_right_address_text_details">1st main, 1st cross, Lorem ipsum dolor sitamet, consectetur Bengaluru, Karnataka 560001</p>
                                </div>
                            </div>
                            <div className="DetailParking__wrapper_basicdetails_right_moredetails">
                                <div className="DetailParking__wrapper_basicdetails_right_moredetails_box">
                                    <ul>
                                        <li><b>Status</b></li>
                                        <li>Request Submitted</li>
                                    </ul>
                                    <ul>
                                        <li><b>Type</b></li>
                                        <li>Corporate Parking Space</li>
                                    </ul>
                                    <ul>
                                        <li><b>Description</b></li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostr . . .</li>
                                    </ul>
                                    <ul>
                                        <li><b>Contact No.</b></li>
                                        <li>+91 98765 43210</li>
                                    </ul>
                                    <ul>
                                        <li><b>Email ID</b></li>
                                        <li>loreum@parkingabc.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Paper>
                        
                        
                        
        
                        <SlotCount />
                        <OperationTimings />
                        <ParkingFacilitiesServices />
                        <Ratingsandreviews />
                            
                        </div>
                    </div>
                
            );
        }
        return parking
    }
}
export default ParkingDetails;


