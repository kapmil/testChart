// React
import React, { Component } from "react";
import styled from "styled-components";

import LineChart from "./LineChart";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import dataJson from "./activity-data.json"

// Define components
class Analitycs extends Component {
  constructor(props) {
    super(props);

    this.state = {
        data: []
    };
    this.prepareData = this.prepareData.bind(this);
    this.updateJson = this.updateJson.bind(this);
  }

  componentDidMount() {
     this.setState({data: dataJson})
     setTimeout(this.updateJson, 1000);
  }

  updateJson() {
    let oldData = dataJson;
    console.log(oldData)
    let newTime = (new Date(oldData[oldData.length-1].data.time)).getMilliseconds() + 1000;
    let newData = [
        {"zoneId":"Calle 85", "data":{"count": Math.floor(Math.random() * 10) + 1,"speed":Math.floor(Math.random() * 10) + 1,"time":newTime}},
        {"zoneId":"Salitre plaza", "data":{"count": Math.floor(Math.random() * 10) + 1,"speed":Math.floor(Math.random() * 10) + 1,"time":newTime}},
        {"zoneId":"Parque 93", "data":{"count":Math.floor(Math.random() * 10) + 1,"speed":Math.floor(Math.random() * 10) + 1,"time":newTime}},
        {"zoneId":"Calle 80", "data":{"count": Math.floor(Math.random() * 10) + 1,"speed":Math.floor(Math.random() * 10) + 1,"time":newTime}},
        {"zoneId":"Centro", "data":{"count": Math.floor(Math.random() * 10) + 1,"speed": Math.floor(Math.random() * 10) + 1 ,"time":newTime}}
       ]       
    let newJson = Object.assign({}, oldData, newData);
    this.setState({data: newJson});
    // TO DO: WRITE NEWJSON TO FILE
  }

  render() {
    let dataLineChart = this.prepareData("line");
    let dataBarChart = this.prepareData("bar");
  //  let dataPieChart = this.prepareData("pie");
    return (
        <div>
            <div>
                <LineChart data={dataLineChart} />
                <BarChart data={dataBarChart} />
                <PieChart data={dataLineChart} />
            </div>
        </div>
    );
  }

  prepareData(type) {
    let times = [];
    let speedArray1 = [], speedArray2 =[], speedArray3 = [], speedArray4= [], speedArray5 = [];
    let count1 = [], count2 = [], count3=[], count4=[], count5=[];
    dataJson.forEach((element, index) => { 
      switch(index%5) {
          case 1: {
              speedArray2.push(element.data.speed);
              count2.push(element.data.count);
              break;
          }
          case 2: {
              speedArray3.push(element.data.speed);
              count3.push(element.data.count);
              break;
          }
          case 3: {
              speedArray4.push(element.data.speed);
              count4.push(element.data.count);
              break;
          }
          case 4: {
              speedArray5.push(element.data.speed);
              count5.push(element.data.count);
              break;
          }
          default: {
              speedArray1.push(element.data.speed);
              count1.push(element.data.count);
              times.push(new Date(element.data.time));
              break;
          }
      }
  });
  let data1, data2, data3, data4, data5;
  if(type==="line"){
      data1 = speedArray1;
      data2 = speedArray2;
      data3 = speedArray3;
      data4 = speedArray4;
      data5 = speedArray5;
  }
  else if(type === "bar") {
    data1 = count1;
    data2 = count2;
    data3 = count3;
    data4 = count4;
    data5 = count5;
  }
    let datasets = [
        {
            label: dataJson[0].zoneId,
            backgroundColor: 'rgb(255, 255, 255)',
            borderColor: 'rgb(255, 99, 132)',
            data: data1
        },
        {
          label: dataJson[1].zoneId,
          backgroundColor: 'rgb(255, 255, 255)',
          borderColor: 'rgb(200, 120, 189)',
          data: data2
      },
      {
          label: dataJson[2].zoneId,
          backgroundColor: 'rgb(255, 255, 255)',
          borderColor: 'rgb(30, 150, 210)',
          data: data3
      },
      {
          label: dataJson[3].zoneId,
          backgroundColor: 'rgb(255, 255, 255)',
          borderColor: 'rgb(90, 189, 240)',
          data: data4
      },
      {
          label: dataJson[4].zoneId,
          backgroundColor: 'rgb(255, 255, 255)',
          borderColor: 'rgb(120, 50, 80)',
          data: data5
      }
    ]
    let data= {
      labels: times,
      datasets: datasets
    }
    return data;
  }
}



export default styled(Analitycs)`
    canvas {
        width: 600px;
        height: 400px;
    }
`;
