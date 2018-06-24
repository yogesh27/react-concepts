import React, { Component } from 'react';

class Child extends Component {
    
    state = {
        name: 'outside Child constructor'
    }
    
    //runs Ist
    constructor(){ //runs one time only, good for initial state
        super();
        this.state = {
            name: 'in Child constructor'
        }
        console.log('Child constructor()');
    }

    //runs 2nd, run for one time only
    //we can update state based on some condition before render() is called
    componentWillMount(){
        console.log('Child componentWillMount()');
    }


    componentDidMount(){
        console.log("Child componentDidMount()");
    }

    componentWillReceiveProps(){
        console.log("Child: componentWillReceiveProps()");
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("Child: shouldComponentUpdate()");
        return false;
    }

    componentWillUpdate(){
        console.log("Child: componentWillUpdate()");
    }

    componentDidUpdate(prevProps, prevState){
        console.log("Child: componentDidUpdate()");
    }

    //UNSAFE_componentWillReceiveProps


    
    //called everytime state is changed
    //do not call setState inside render()
    render() {
        console.log("Child render()");
        return (
            <div className="App">
                From parent name: {this.props.name} <br/>
                Child Name: {this.state.name}
            </div>
        );
    }
}

export default Child;
