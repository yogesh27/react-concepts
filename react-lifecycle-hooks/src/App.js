import React, { Component } from 'react';
import './App.css';
import Child from './Child';

class App extends Component {
    
    state = {
        name: 'Yogesh Asthana(outside constructor)'
    }
    
    //runs Ist
    constructor(){ //runs one time only, good for initial state
        super();
        this.state = {
            name: 'Yogesh Asthana(inside constructor)'
        }
        console.log('in constructor()');
    }

    //runs 2nd, run for one time only
    //we can update state based on some condition before render() is called
    componentWillMount(){
        console.log('componentWillMount(): component Will Mount runs second');
        if(window.innerWidth < 700){
            this.setState({
                innerWidth: window.innerWidth
            })
        }
    }

    //runs once
    //good for ajax call
    //you can setState in this, but it will render() again
    componentDidMount(){
        console.log("componentDidMount()");
    }

    // dont update props in this
    // u can update state
    componentWillReceiveProps(){
        console.log("componentWillReceiveProps()");
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate()");
        return true;
    }

    //dont setState here
    componentWillUpdate(){
        console.log("componentWillUpdate()");
    }

    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate()");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount()");
    }


    changeState(){
        this.setState({name: 'Yogesh'});
    }

    
    //called everytime state is changed
    //do not call setState inside render()
    render() {
        console.log("render(): render the component with state and props")
        return (
            <div className="App">
                Name: {this.state.name} <br/>
                innerWidth: {this.state.innerWidth}

                {/* <Child name={this.state.name} /> */}
                <br/>
                <button onClick={this.changeState.bind(this)}>Change State</button>
            </div>
        );
    }
}

export default App;
