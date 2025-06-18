import React from 'react';
import './App.css'
import jaipur from './assets/jaipur.jpeg';
import manali from './assets/manali.jpg';
import goa from './assets/goa.jpeg';
import Kerala from './assets/kerala.jpeg';
import Ladakh from './assets/ladakh.jpeg';
import { useState } from 'react';
import Forms from './components/forms/Forms';
import TripBoard from './components/tripBoard/TripBoard';

function App(){
  const tripsList = [
        {
            id: '1',
            date: new Date('2025-06-15'),
            image: jaipur,
            location: 'Jaipur',
            price: 4500,
            details: 'Visited forts and enjoyed traditional thali.',
        },
        {
            id: '2',
            date: new Date('2025-06-18'),
            image: manali,
            location: 'Manali',
            price: 17800,
            details: 'Snow trek and beautiful views of mountains.',
        },
        {
            id: '3',
            date: new Date('2025-07-10'),
            image: goa,
            location: 'Goa',
            price: 16200,
            details: 'Relaxed on beaches and tried seafood.',
        },
        {
            id: '4',
            date: new Date('2025-08-05'),
            image: Kerala,
            location: 'Kerala',
            price: 6900,
            details: 'Houseboat ride and backwater exploration.'
        },
        {
            id: '5',
            date: new Date('2025-09-01'),
            image: Ladakh,
            location: 'Ladakh',
            price: 11000,
            details: 'Bike trip through mountain passes and lakes.',
        },

    ];

    const [trip, setTrips] = useState(tripsList);

    const addTrip = (trip) => {
        // const imgname = trip.image.name; 
        const imgname = URL.createObjectURL(trip.image); 

        const newTrip = {
            ...trip,
            id: Date.now().toString(),
            image: imgname, 
        };

        setTrips(prev => 
            [...prev, newTrip]
        );
  };

  return (
    <div className='app'>
      <h1 className="heading">Trip Log & Planner</h1>
      
      <Forms onAddTrip={addTrip} />
      <TripBoard trips={trip} />

    </div>
  );
}

export default App;