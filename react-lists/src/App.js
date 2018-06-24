import React, { Component } from 'react';
import User from './components/user';
import './App.css';

class App extends Component {
    state = {
        users: [
            {id:'12', name:'John', age:20},
            {id:'13', name:'Peter', age:30},
            {id:'14', name:'Jill', age:25}
        ]
    }

    deleteUser = (index,e) => {
        const users = Object.assign([], this.state.users); //creates copy of state
        users.splice(index, 1);
        this.setState({users: users});


        //Each child in an array or iterator should have a unique "key" prop.
    }

    render() {
        return (
            <div className="App">
                <ul>
                    {
                        this.state.users.map((user, index)=>{
                            return(
                                <User age={user.age}
                                    key = {user.id}
                                    delEvent={this.deleteUser.bind(this, index)}>{user.name}</User>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default App;
