import React from 'react';
import TripTicket from '../tripTicket/TripTicket';
import './TripBoard.css';

export default function TripBoard({ trips }){
    
    return(
        <div className="trip-board">
        <h1 className="title">Trips Timeline</h1>
            <div className="list">
                {trips.map((trip) => (
                    <TripTicket 
                        key={trip.id} 
                        date={trip.date} 
                        location={trip.location} 
                        price={trip.price} 
                        details={trip.details} 
                        image={trip.image}
                    />
                ))}
            </div>
        </div>
    );
}

// Trip Log & Planner