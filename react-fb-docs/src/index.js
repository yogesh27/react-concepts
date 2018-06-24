import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//update this line with steps from docs.txt
//ReactDOM.render(<App />, document.getElementById('root')); 


class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};

      console.log("constructor()");
    }
  
    componentDidMount() {
        console.log("componentDidMount()")
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
  
    tick() {
        this.setState({
            date: new Date()
        });
    }

    removeTimer(){
        this.setState({
            isTimerRemoved: true
        })
    }
  
    render() {
        console.log("render()");
        const isTimerRemoved = this.state.isTimerRemoved;
        if(isTimerRemoved){
            return <h1>Timer remover</h1>
        }
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
ReactDOM.render(<Clock />,document.getElementById('root'));



//registerServiceWorker(); //this is needed for offline view. App will still run if this is not called



