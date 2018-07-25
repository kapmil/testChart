// React
import React, { Component } from "react";

import {Pie} from "react-chartjs-2";

// Define components
class PieChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
        data: props.data
    };
  }

  render() {
    return (
        <div>
            <Pie data={this.state.data} width={600} height={250} />
        </div>
    );
  }
}

export default PieChart;
