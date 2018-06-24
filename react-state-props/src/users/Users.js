// class based component
// state can only be used in class which extends Component class

import React, { Component } from 'react';
import User from './User';

class Users extends Component{

    state = {
        users: [
            {name: "John", age: 20},
            {name: "Jill", age: 30},
            {name: "Peter", age: 40},
            {name: "Test User", age: 50}
        ],
        title: "Users List"
    };

    makeMeYounger = () => {
        const newState = this.state.users.map((user) =>{
            const tempUser = user;
            tempUser.age -= 10;
            return tempUser;
        })

        this.setState({
            newState
        })
    }

    render(){
        return (
            <div>
                <button onClick={this.makeMeYounger}>Make us 10 years younger</button>
                <br/>
                <h1>{this.state.title}</h1>
                {
                    this.state.users.map((user) => {
                        return <User age={user.age}>{user.name}</User>
                    })
                }
            </div>
        )
    }
}

export default Users;