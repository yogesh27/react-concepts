// es6 functional component: use props for content

import React from 'react';

const User = (props) => {
    return (<div>Name: {props.children} | Age: {props.age}</div>)
}

export default User;


