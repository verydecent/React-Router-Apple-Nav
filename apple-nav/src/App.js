import React, { Component } from 'react';
import { Route, Link} from 'react-router-dom';
import NavWrapper from './Components/NavWrapper';
import { tabs, subTabs } from './data';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tabs: [tabs],
      cards: [subTabs],
    }
  }
  render() {
    return (
      <div className="App">
        <Route 
        path="/" 
        render={(props) => <NavWrapper {...props} navTabs={this.state.tabs} />} 
        />
      </div>
    );
  }
}

export default App;
