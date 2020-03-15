import React, {Component}from "react";
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { CardActionArea } from "@material-ui/core";

import './Cards.scss'

function CardContents(props) {
  return (
    <Grid item xs={12} md={3} sm={6}>
      <Card raised={true} style={{backgroundColor:'white'}}>
        <CardActionArea>
        <div className="card">
          <div className="cardItems">
            <img className="img-fluid p-3" src={props.image} alt="icon" />
            <div className="mt-3">
            <span className="styleCardTitle">{props.title}</span>
            <p className="styleLocationLabel">{props.location}</p>
            </div>
          </div>
        </div>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

class Cards extends Component {
      
      render() {
        return (
          <>
              <CardContents
                image={this.props.image}
                title={this.props.title}
                location={this.props.location}
                description={this.props.category}
              />
          </>
        );
      }
}

export default Cards

