import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = {
        name: 'Yogesh Asthana'
    }

    changeName = () => {
        this.setState({
            name: 'State changed'
        })
    }

    changeNameWithParam = (newName) => {
        this.setState({
            name: newName
        })
    }

    changeNameFromInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return (
        <div className="App">
            <br/><br/>
            {/* <button onClick={this.changeName()}>Change State</button> ": will give error*/}
            <button onClick={this.changeName}>Change State</button> OR
            <button onClick={() => {this.changeName()}}>Change State using Anonymous function</button>
            <br/><br/>
           
            Using Param: <br/>
            <button onClick={() => {this.changeNameWithParam('changed state using anonymous function')}}>Change State with Param using Anonymous function</button><br/>
            <button onClick={this.changeNameWithParam.bind(this, 'changed state using bind is better')}>Change State with Param using Bind function</button>
            <br/><br/>

            <input type="text" onChange={this.changeNameFromInput} value={this.state.name}/>
            <br/><br/>

            <div>{this.state.name}</div>
        </div>
        );
    }
}

export default App;
