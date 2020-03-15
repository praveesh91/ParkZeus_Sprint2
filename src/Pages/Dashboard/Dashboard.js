import React, { Component } from 'react';

import CardList from '../../Components/Cards/CardList.js';
import StyledBackground from './Background'
import { Grid, Container, Typography } from '@material-ui/core';
import ChartContainer from '../../Components/Charts/ChartContainer/ChartContainer.js';
import Calendar from '../../Components/Calender/Calender';
import Rating from '../../Components/Ratings/Rating'

// import ActionList from '../../components/ActionCards/CardList.js'
import ViewContainer from '../../Components/ParkingSpaceOverview/ParkingOverview/ViewContainer';

import '../../Assets/Scss/style.scss'

class Dashboard extends Component {

  render() {
    return (
      <Container maxWidth="xl">
        
        <Grid container className='padding-btm'>
          <Typography className="userName" variant="h5" gutterBottom>
            Welcome! Jean Donas
          </Typography>
          <StyledBackground/>
        </Grid>
        <Grid container className='padding-btm'>
          <CardList />
        </Grid>
        <Grid container spacing={1} className='padding-btm'>
          <Grid item md={8} xs={12}>
            <ViewContainer />
            <ChartContainer />
          </Grid>
          <Grid item md={4} xs={12}>
            <Calendar />
            <Rating />
          </Grid>
        </Grid>
        {/* <Grid container spacing={1} className='padding-btm'>
          <Grid item md={8} xs={12}>
            <ChartContainer />
          </Grid>
          <Grid item md={4} xs={12}>
            <Rating />
          </Grid>
        </Grid> */}
      </Container>
    )
  }
}

export default Dashboard;
