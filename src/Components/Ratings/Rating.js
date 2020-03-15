import React, { Component, Fragment } from 'react'
import { Scrollbars } from 'react-custom-scrollbars';

import {CardHeader, Card, IconButton, CardContent, Grid} from '@material-ui/core';
import Ratings from '@material-ui/lab/Rating';
import LinearProgress from '@material-ui/core/LinearProgress';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';

import './Ratings.scss'

class Rating extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value: 4,
        }
    }
    

    render() {
        return (
            <Fragment>
            <Card raised={true} className='rating_cont'>
                <CardHeader
                    action={
                        <div>
                            <IconButton onClick = {()=> {}}><MoreVertIcon /></IconButton>
                        </div>
                    }
                    title="Ratings and Reviews"
                    titleTypographyProps={{variant:'h6' }}
                    />
                <Scrollbars
                    autoHide 
                    style={{ height: 480 }}>
                <CardContent>
                    <Ratings name="read-only" value={this.state.value} readOnly />
                    <span className="rating_count">124 Total Ratings</span>
                    <div className="ratings_container">
                        <div className="ratings">
                            <h2>4.5</h2>
                            <p>Average Ratings</p>
                        </div>
                        <div className="progressbar_container">
                            <Grid container spacing={1} className="progress">
                                <Grid item xs={2} className="star_rating">
                                    <span>5</span>
                                    <span><StarOutlinedIcon style={{color:'#ffb400',fontSize: '18px'}} /></span>
                                </Grid>
                                <Grid item xs={8} className="bar">
                                    <LinearProgress
                                        variant="determinate"
                                        color="secondary"
                                        value={60}
                                    />
                                </Grid>
                                <Grid item xs={1} className="percentage">60%</Grid>
                            </Grid>

                            <Grid container spacing={1} className="progress">
                                <Grid item xs={2} className="star_rating">
                                    <span>4</span>
                                    <span><StarOutlinedIcon style={{color:'#ffb400',fontSize: '18px'}} /></span>
                                </Grid>
                                <Grid item xs={8} className="bar">
                                    <LinearProgress
                                        variant="determinate"
                                        color="secondary"
                                        value={40}
                                    />
                                </Grid>
                                <Grid item xs={1} className="percentage">40%</Grid>
                            </Grid>

                            <Grid container spacing={1} className="progress">
                                <Grid item xs={2} className="star_rating">
                                    <span>3</span>
                                    <span><StarOutlinedIcon style={{color:'#ffb400',fontSize: '18px'}} /></span>
                                </Grid>
                                <Grid item xs={8} className="bar">
                                    <LinearProgress
                                        variant="determinate"
                                        color="secondary"
                                        value={40}
                                    />
                                </Grid>
                                <Grid item xs={1} className="percentage">40%</Grid>
                            </Grid>
                            <Grid container spacing={1} className="progress">
                                <Grid item xs={2} className="star_rating">
                                    <span>2</span>
                                    <span><StarOutlinedIcon style={{color:'#ffb400',fontSize: '18px'}} /></span>
                                </Grid>
                                <Grid item xs={8} className="bar">
                                    <LinearProgress
                                        variant="determinate"
                                        color="secondary"
                                        value={20}
                                    />
                                </Grid>
                                <Grid item xs={1} className="percentage">20%</Grid>
                            </Grid>

                            <Grid container spacing={1} className="progress">
                                <Grid item xs={2} className="star_rating">
                                    <span>1</span>
                                    <span><StarOutlinedIcon style={{color:'#ffb400',fontSize: '18px'}} /></span>
                                </Grid>
                                <Grid item xs={8} className="bar">
                                    <LinearProgress
                                        variant="determinate"
                                        color="secondary"
                                        value={10}
                                    />
                                </Grid>
                                <Grid item xs={1} className="percentage">10%</Grid>
                            </Grid>
               
                        </div>
                    </div>

                    <div className="comment_container">
                        <Grid container className="comment">
                            <Grid item xs={6}>
                                Tina Parker
                            </Grid>
                            <Grid item xs={6}>
                                <Ratings name="read-only" value={this.state.value} readOnly />
                            </Grid>
                            <Grid item xs={12}>
                            Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                            </Grid>        
                        </Grid>
                        <Grid container className="comment">
                            <Grid item xs={6}>
                                Tina Parker
                            </Grid>
                            <Grid item xs={6}>
                                <Ratings name="read-only" value={this.state.value} readOnly />
                            </Grid>
                            <Grid item xs={12}>
                            Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                            </Grid>        
                        </Grid>
                        <Grid container className="comment">
                            <Grid item xs={6}>
                                Tina Parker
                            </Grid>
                            <Grid item xs={6}>
                                <Ratings name="read-only" value={this.state.value} readOnly />
                            </Grid>
                            <Grid item xs={12}>
                            Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                            </Grid>        
                        </Grid>
                    </div>
                </CardContent>
                </Scrollbars>
            </Card>
            </Fragment>
        )
    }
}

export default Rating
