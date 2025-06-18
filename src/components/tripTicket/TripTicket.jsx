import React from 'react';
import Card from '../cards/Cards';
import DateImageCard from '../tripDateImage/TripDateImage';
import './TripTicket.css';

export default function TripTicket(props){
  
    return (
    <Card className="trip-ticket">
      
      <DateImageCard date={props.date} image={props.image}/>
      
      <div className="trip-content">
        <h3>{props.location}</h3>
        <p><strong>Price:</strong> Rs. {props.price}</p>
        <p>{props.details}</p>
      </div>
    </Card>
  );
};
