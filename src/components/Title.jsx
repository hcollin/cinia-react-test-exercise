import React from 'react';

export default function Title(props) {

    

    if(props.level === 1) {
        return <h1>{props.children}</h1>
    }

    if(props.level === 2) {
        return <h2>{props.children}</h2>
    }

    if(props.level === 3) {
        return <h3>{props.children}</h3>
    }

    return (
        <h4>{props.children}</h4>
    )
}