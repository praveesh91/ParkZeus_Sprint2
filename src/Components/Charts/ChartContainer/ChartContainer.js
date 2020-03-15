import React, { Component } from 'react'

import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import lineIcon from '../../../Assets/Images/Line graph.png'
import barIcon from '../../../Assets/Images/bar graph.png'
import areaIcon from '../../../Assets/Images/pie chart.png'
import lineIconSelected from '../../../Assets/Images/selected line graph.png'
import barIconSelected from '../../../Assets/Images/selected bar graph.png'
import areaIconSelected from '../../../Assets/Images/selected pie chart.png'
import { CardContent } from '@material-ui/core';
import Chart from './Chart.js'

import MoreVertIcon from '@material-ui/icons/MoreVert';


export class ChartContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
          dropdownOpen: false,
          chartType : 'Pie',
          line: true,
          bar: false,
          area: false
        }
    }
    async handleLine(){
        await this.setState({ chartType:"Line", line:true, bar:false, area:false});
        this.refs.child.graphType();
        this.refs.child.graphData();
    }
    async handleBar(){
        await this.setState({ chartType:"Bar", line:false, bar:true, area:false});
        this.refs.child.graphType();
        this.refs.child.graphData();
    }
    async handlePie(){
        await this.setState({chartType:"Pie", line:false, bar:false, area:true});
        this.refs.child.graphData();
        this.refs.child.graphType();
    }

    render() {
        const {line, bar, area} = this.state;
        
        return (

            <Card raised={true} className='card-cont'>
            <CardHeader
                action={
                    <div>
                        <IconButton onClick = {()=> {this.handleLine()}}><img src={line ? lineIconSelected : lineIcon} style={{width:'25px'}} alt="icon" /></IconButton>
                        <IconButton onClick = {()=> {this.handleBar()}}><img src={bar ? barIconSelected : barIcon} style={{width:'25px'}} alt="icon" /></IconButton>
                        <IconButton onClick = {()=> {this.handlePie()}}><img src={area ? areaIconSelected : areaIcon} style={{width:'25px'}}  alt="icon" /></IconButton>
                        <IconButton onClick = {()=> {}}><MoreVertIcon /></IconButton>
                    </div>
                }
                title="Parking Utilisation"
                titleTypographyProps={{variant:'h6' }}
                />
            <CardContent>
                <Chart ref="child" chartType={this.state.chartType} />
                <div className="card-footer">
                    <Button variant="contained" color="primary">Track the Parking status</Button>
                </div>
            </CardContent>
        </Card>

        )
    }
}

export default ChartContainer
