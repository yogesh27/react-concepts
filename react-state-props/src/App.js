import React, { Component } from 'react';
import Users from './users/Users';
import Users1 from './users/Users1';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <h3>Programatically set state:</h3>
            <Users/>
            <h3>Manually set state:</h3>
            <Users1/>
        </div>
    );
  }
}

export default App;
