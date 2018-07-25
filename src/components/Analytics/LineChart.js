// React
import React, { Component } from "react";

import {Line} from "react-chartjs-2";

// Define components
class LineChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
        data: props.data
    };
  }

  render() {
    return (
        <div>
            <Line data={this.state.data} width={600} height={250} />
        </div>
    );
  }
}

export default LineChart;
