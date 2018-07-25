// React
import React, { Component } from "react";

import {Bar} from "react-chartjs-2";

// Define components
class BarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
        data: props.data
    };
  }

  render() {
    return (
        <div>
            <Bar data={this.state.data} width={600} height={250} />
        </div>
    );
  }
}

export default BarChart;
