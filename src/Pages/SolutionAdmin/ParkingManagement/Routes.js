import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ParkingDetails from './ParkingSpace/ParkingDetails';
// import AddParking from './ParkingSpace/AddParking';
import ParkingOverview from './ParkingOverview';
import Dashboard from './../../Dashboard/Dashboard';
import Footer from '../../../Components/Footer/Footer';
import Header from '../../../Components/Header/Header';
// import ParkingManagement from '../ParkingManagement/index';
import Sidebar from '../../../Components/Sidebar/Sidebar';
//import ParkingOverview from '../ParkingManagement/ParkingOverview';

import Profile from '../../../Pages/Profile/Profile'
import EditProfile from '../../../Pages/Profile/EditProfile'

{/* <Sidebar /> */}

 class Routes extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           open: true,
           setIsOpen: false
        }
        // console.log("setIsOpen inside state",this.state.setIsOpen)
    
      }

      toggleDrawer = (props) => {
        this.setState(prevState =>({
          setIsOpen: !prevState.setIsOpen
        }));
        // console.log("setIsOpen",this.state.setIsOpen)
      }
    render() {
        return (
            <Fragment>
            <Header toggleMenu={this.toggleDrawer}  />
            
            <Router>
            <div className="block" style={{display:"flex"}}>
                <Sidebar openState={this.state.setIsOpen}  />
                <div className="box-screens" style={{width:"100%"}}>
                    <Switch >
                        <Route path="/" exact component={ Dashboard  } />
                        <Route path="/parkingmanagment" component={ParkingOverview} />
                        <Route path="/parking-details/:id" exact component= {ParkingDetails} />
                        <Route path="/profile" exact component={Profile} />
                        <Route path="/profile/edit" exact component={EditProfile} />
                    </Switch>
                </div>
            </div>
            </Router>
            <Footer />
            </Fragment>
        )
    }
}
export default Routes;