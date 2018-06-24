import React from 'react';
import Child from './child';

const parent = (props) => {
    return(
        <div>
            {/* <Child {...props} xyz='xyz'/> */}
            <Child doWhatEver={props.changeTheWorldEvent} title={props.title}/>
            <Child doWhatEver={props.keepTheWorldSameEvent} title={props.title}/>
        </div>
    )
}

export default parent;