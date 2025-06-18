import React from 'react';
import Card from '../cards/Cards';
import DateImageCard from '../tripDateImage/TripDateImage';
import './TripTicket.css';

export default function TripTicket({trip}){
  const { date, image, location, price, details } = trip;

    return (
    <Card className="trip-ticket">
      
      <DateImageCard trip ={trip}/>
      
      <div className="trip-content">
        <h3>{location}</h3>
        <p><strong>Price:</strong> Rs. {price}</p>
        <p>{details}</p>

        {/* {price > 10000 && 
          (<p className="premium-msg">Premium Trip</p>)
        } */}
      </div>
    </Card>
  );
};
