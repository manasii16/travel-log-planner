import React from 'react';
import './Cards.css'

export default function Cards(props){
    const classes = "cards " + props.className;
    return <div className={classes}>{props.children}</div>;
};