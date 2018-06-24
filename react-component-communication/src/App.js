import React, { Component } from 'react';
import './App.css';
//import Child from './components/parentToChild/child';
import Parent from './components/parentToChild/parent'

class App extends Component {
    state = {
        title: 'placeholder title'
    }

    changeTheWorld = (newTitle) => {
        this.setState({title: newTitle});
    }
    
    render() {
        return (
            <div className="App">
                {/* <Child doWhatEver={this.changeTheWorld.bind(this, 'new world!')} title={this.state.title}/> */}
                {/* <Parent doWhatEver={this.changeTheWorld.bind(this, 'new world!')} title={this.state.title}/> */}
                <Parent changeTheWorldEvent={this.changeTheWorld.bind(this, 'new world!')} 
                    keepTheWorldSameEvent={this.changeTheWorld.bind(this, 'same world!')}
                        title={this.state.title}/>

            </div>
        );
    }
}

export default App;
