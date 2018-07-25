import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Analitycs from "../Analytics/Analitycs"

class App extends Component {
   
  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar />
        <Switch location={this.props.location}>
          <Route exact path="/" component={Analitycs} />
          <Route exact path="/analitycs" component={Analitycs} />
          {/* <Route exact path="/news" component={News} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
