import React from 'react';
import axios from 'axios';
import { Line, Bar } from 'react-chartjs-2';

class ChartContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      chartData: {},
      showLine: true,
      showBar: false,
      showPie: false,
      fillFlag: false
    }
  }


  componentDidMount() {
    this.graphData();
  }

graphData = () =>{

  axios('https://praveesh91.github.io/test_json/parkingData.json')
  .then((response) => {
    const { parkingData } = response.data;
    // const values = parkingData.map(d => d.vehicles.booked)
    // const valus = parkingData.map(d => d.day)
    const {fillFlag} = this.state
    console.log("fillFlagInComponentDidMount=", fillFlag);


    const chartData = (canvas) => {
      const ctx = canvas.getContext("2d")
      const solidRed = 'red'
      const gradient = ctx.createLinearGradient(0, 0, 0, 450);
      gradient.addColorStop(0, 'rgba(255, 0,0, 0.5)');
      gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)');
      gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');
      return {
        labels: parkingData.map(k => k.day),
        datasets: [
            {
            label: 'Booked',
            fill: fillFlag ? true : false,
            // fill: true,
            data: parkingData.map(d => d.vehicles.booked),
            backgroundColor: fillFlag ? gradient : solidRed,
            borderColor: fillFlag ? 'transparent': 'red'
            },
            // {
            //   label: 'Vacant',
            //   // fill: true,
            //   data: parkingData.map(d => d.vehicles.vacant),
            //   backgroundColor: 'blue',
            //   borderColor: 'blue',
            // },
            // {
            //   label: 'Occupied',
            //   // fill: 'false',
            //   data: parkingData.map(d => d.vehicles.occupied),
            //   backgroundColor: 'green',
            //   borderColor: 'green',
            // }
        ],

      }
    }

    this.setState({ chartData });
  });
}
  
graphType = ()=>{

  // const fillValue = {showLine ? true : false}
  const Chart_type = this.props.chartType;
  // console.log("Chart_type in ChartContainer is ",Chart_type);
  if (Chart_type==='Line'){
    this.setState({
      showLine: true,
      showBar: false,
      showPie: false,
      fillFlag: false
    })
  }
  else if(Chart_type==='Bar'){
      this.setState({
        showLine: false,
        showBar: true,
        showPie: false,
      })
  }
  else if(Chart_type==="Pie"){
      this.setState({
        showLine: false,
        showBar: false,
        showPie: true,
        fillFlag: true
      })
  }

}

render() {

  const {showLine, showBar, showPie,chartData,fillFlag} = this.state;
  console.log("chartData=",chartData);
  console.log("fillFlagOutsideComponentDidMount=", fillFlag)

  return (
  <div>
      {showLine && <Line data={chartData}/>}
      {showBar && <Bar data={chartData}/>}
      {showPie && <Line data={chartData}/>}
  </div>
  );
}
}
export default ChartContainer;
