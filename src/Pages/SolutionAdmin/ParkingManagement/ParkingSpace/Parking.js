import React, { Component, Fragment } from 'react';
import {Card, CardActionArea} from '@material-ui/core';
import {Link} from 'react-router-dom';
import './Parking.scss';
import StatusIcon from '../../../../Assets/Images/outside.png';




 class Parking extends Component {
     
     
    render(props) {

        //console.log(this.props.params.id);

       

        return (
            <Fragment>
           
               
                    <div className="parking" onClick={this.props.clicked} >
                        <div className="parking__wrapper">
            
                        <Link to={'/parking-details/' +this.props.id} style={{ textDecoration: 'none' }}><div className="parking__wrapper_card">
                                <Card className="parking__wrapper_card_card">
                                    <CardActionArea className="parking__wrapper_card_card_box">
                                     
                                    <div className="parking__wrapper_card_card_box_data">
                                        Parking Space  <span className="parking__wrapper_card_card_box_data_parkingName">{this.props.title}</span> 
                                        <img src={StatusIcon} alt="status" />
                                    </div>
                                    <span className="parking__wrapper_card_card_box_data_status">Approved</span>
                                    <div className="parking__wrapper_card_card_box_data">
                                        <span className="parking__wrapper_card_card_box_data_title"><b>Type</b> </span> 
                                        <span className="parking__wrapper_card_card_box_data_value">:Commercial </span> 
                                    </div>
                                    <div className="parking__wrapper_card_card_box_data">
                                        <span className="parking__wrapper_card_card_box_data_title"><b>Operation Time</b> </span> 
                                        <span className="parking__wrapper_card_card_box_data_value"> :10.00 am - 8.00 pm  </span> 
                                    </div>

                                    <div className="parking__wrapper_card_card_box_data">
                                        <span className="parking__wrapper_card_card_box_data_title"><b>Tarrif</b> </span> 
                                        <span className="parking__wrapper_card_card_box_data_value"> :{this.props.created}   </span> 
                                        
                                        
                                    </div>
                                    <div className="parking__wrapper_card_card_box_data">
                                        <span className="parking__wrapper_card_card_box_data_title"><b>Address</b> </span> 
                                        <span className="parking__wrapper_card_card_box_data_value">  :Lorem ipsum,1st main, 2 ross,sum orem - 560 001  </span> 
                                           
                                       
                                    </div>
                                    </CardActionArea>
                                </Card>
                                </div>
                                </Link>
                         
                        </div>
                    </div>
                    
            
            </Fragment>
             
        )
    }
}
export default Parking;

