// class based component

import React, { Component } from 'react';
import User from './User';

class Users extends Component{
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <User></User>
                <User age="30">Jill</User>
                <User age="40">Peter</User>
            </div>
        )
    }
}

export default Users;