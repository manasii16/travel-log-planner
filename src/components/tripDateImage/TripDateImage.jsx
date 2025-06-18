import React from "react";
import './TripDateImage.css';

export default function DateImageCard({date,image}){
    const datestr = new Date(date).toDateString();

    return(
        <div className="date-img-card">
            <img src={image} className="image"></img>
            <div className="date">{datestr}</div>
        </div>
    );
};
