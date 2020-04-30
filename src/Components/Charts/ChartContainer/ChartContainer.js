import React, { Component } from 'react'

import {CardHeader, Card, IconButton,Button, CardContent} from '@material-ui/core/';

import lineIcon from '../../../Assets/Images/Line graph.png'
import barIcon from '../../../Assets/Images/bar graph.png'
import areaIcon from '../../../Assets/Images/pie chart.png'
import lineIconSelected from '../../../Assets/Images/selected line graph.png'
import barIconSelected from '../../../Assets/Images/selected bar graph.png'
import areaIconSelected from '../../../Assets/Images/selected pie chart.png'

import DateSlider from '../DateSlider/DateSlider'
import Chart from './Chart.js'
import './Chart.scss'

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
        const selectedDay = val => {
            console.log(val);
          };
        
        return (

            <Card raised={true} className='card-cont'>
            <CardHeader
                action={
                    <div>
                        <div style={{display:"inline"}}>
                            <select style={{width:'25em', marginRight:'2em', paddingBottom:'5px', outline: 'transparent', paddingTop:'5px', borderColor:'#eee', borderRadius:'12px'}}>
                                <option value="volvo">Parking Space A</option>
                                <option value="saab">Parking Space B</option>
                                <option value="mercedes">Parking Space C</option>
                                <option value="audi">Parking Space D</option>
                            </select>
                        </div>
                        <div style={{display:"inline"}}>
                            <IconButton className="noPadBtn" onClick = {()=> {this.handleLine()}}><img src={line ? lineIconSelected : lineIcon} style={{width:'25px'}} alt="icon" /></IconButton>
                            <IconButton className="noPadBtn" onClick = {()=> {this.handleBar()}}><img src={bar ? barIconSelected : barIcon} style={{width:'25px'}} alt="icon" /></IconButton>
                            <IconButton className="noPadBtn" onClick = {()=> {this.handlePie()}}><img src={area ? areaIconSelected : areaIcon} style={{width:'25px'}}  alt="icon" /></IconButton>
                            <IconButton onClick = {()=> {}}><MoreVertIcon /></IconButton>
                        </div>
                    </div>
                }
                title="Parking Utilisation"
                titleTypographyProps={{variant:'h6' }}
                />
            <CardContent>
                <DateSlider shouldScroll={true}
                //   endDate={100}
                  getSelectedDay={selectedDay} 
                  />
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
