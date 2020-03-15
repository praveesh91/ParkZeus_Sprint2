import React, { Component } from 'react';
import { Card, Paper, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import './Ratingsandreviews.scss';
import { yellow } from '@material-ui/core/colors';
export default class Ratingsandreviews extends Component {
    render() {
        return (
            <div className="Ratingsandreviews">
                <div className="Ratingsandreviews__wrapper">
                    <div className="Ratingsandreviews__wrapper_box">
                        <Card>
                            <div className="Ratingsandreviews__wrapper_box_heading">
                                <Typography gutterBottom variant="h5" component="h2">
                                Ratings and Reviews
                                </Typography>
                            </div>
                                
                            <p className="Ratingsandreviews__wrapper_box_final-ratings">Overview <span style={{color:"#ffb539"}}>4.5</span> | 124 Total Ratings</p>
                            <div className="Ratingsandreviews__wrapper_box_review">
                                <div className="Ratingsandreviews__wrapper_box_review_heading">
                                    <p className="Ratingsandreviews__wrapper_box_review_heading_name">
                                    Tina Parker
                                    </p>
                                    <p className="Ratingsandreviews__wrapper_box_review_heading_ratings">
                                        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                                    </p>
                                </div>
                                <p className="Ratingsandreviews__wrapper_box_review_date">
                                    20 Jan 2020 12:33PM
                                </p>
                                <p className="Ratingsandreviews__wrapper_box_review_content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                </p>
                            </div>
                            <div className="Ratingsandreviews__wrapper_box_review">
                                <div className="Ratingsandreviews__wrapper_box_review_heading">
                                    <p className="Ratingsandreviews__wrapper_box_review_heading_name">
                                    Tina Parker
                                    </p>
                                    <p className="Ratingsandreviews__wrapper_box_review_heading_ratings">
                                        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                                    </p>
                                </div>
                                <p className="Ratingsandreviews__wrapper_box_review_date">
                                    20 Jan 2020 12:33PM
                                </p>
                                <p className="Ratingsandreviews__wrapper_box_review_content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                </p>
                            </div>
                            <div className="Ratingsandreviews__wrapper_box_review">
                                <div className="Ratingsandreviews__wrapper_box_review_heading">
                                    <p className="Ratingsandreviews__wrapper_box_review_heading_name">
                                    Tina Parker
                                    </p>
                                    <p className="Ratingsandreviews__wrapper_box_review_heading_ratings">
                                        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                                    </p>
                                </div>
                                <p className="Ratingsandreviews__wrapper_box_review_date">
                                    20 Jan 2020 12:33PM
                                </p>
                                <p className="Ratingsandreviews__wrapper_box_review_content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                </p>
                            </div><div className="Ratingsandreviews__wrapper_box_review">
                                <div className="Ratingsandreviews__wrapper_box_review_heading">
                                    <p className="Ratingsandreviews__wrapper_box_review_heading_name">
                                    Tina Parker
                                    </p>
                                    <p className="Ratingsandreviews__wrapper_box_review_heading_ratings">
                                        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                                    </p>
                                </div>
                                <p className="Ratingsandreviews__wrapper_box_review_date">
                                    20 Jan 2020 12:33PM
                                </p>
                                <p className="Ratingsandreviews__wrapper_box_review_content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}
