import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavWrapper from './Components/NavWrapper';
import SubNav from './Components/SubNav';
import { tabs, subTabs } from './data';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tabs: tabs,
      cards: subTabs,
    }
  }
  render() {
    return (
      <div className="App">
        <Route
        path='/'
        render={(props) => <NavWrapper {...props} navTabs={this.state.tabs} />}
        />
        <Route 
        path="/:productName"
        component={SubNav}
        />
      </div>
    );
  }
}

export default App;
