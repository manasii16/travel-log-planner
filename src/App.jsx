import React from 'react';
import jaipur from './assets/jaipur.jpeg';
import manali from './assets/manali.jpg';
import goa from './assets/goa.jpeg';
import Kerala from './assets/kerala.jpeg';
import Ladakh from './assets/ladakh.jpeg';
import Kasol from './assets/Kasol.jpeg';
import Rishikesh from './assets/rishikesh.jpg';
import Ooty from './assets/ooty.jpeg';
import Varanasi from './assets/varansi.jpg';
import Shimla from './assets/shimla.jpeg';
import Udaipur from './assets/udaipur.jpeg';
import Agra from './assets/agra.jpg';
import { FaPlane, FaMapMarkedAlt, FaMountain } from 'react-icons/fa';

import TripBoard from './components/tripBoard/TripBoard';
import Forms from './components/forms/Forms';
import { useState } from 'react';
import './App.css'

function App(){
  const tripsList = [
  { id: '1', date: new Date('2024-06-15'), image: jaipur, location: 'Jaipur', price: 4500, details: 'Visited forts and enjoyed traditional thali.' },
    { id: '2', date: new Date('2025-06-18'), image: manali, location: 'Manali', price: 17800, details: 'Snow trek and beautiful views of mountains.' },
    { id: '3', date: new Date('2024-07-10'), image: goa, location: 'Goa', price: 16200, details: 'Relaxed on beaches and tried seafood.' },
    { id: '4', date: new Date('2025-08-05'), image: Kerala, location: 'Kerala', price: 6900, details: 'Houseboat ride and backwater exploration.' },
    { id: '5', date: new Date('2024-09-01'), image: Ladakh, location: 'Ladakh', price: 11000, details: 'Bike trip through mountain passes and lakes.' },
    { id: '6', date: new Date('2024-06-12'), image: Kerala, location: 'Kerala', price: 6900, details: 'Houseboat ride and backwater exploration.' },
    { id: '7', date: new Date('2022-08-01'), image: Ladakh, location: 'Ladakh', price: 11000, details: 'Bike trip through mountain passes and lakes.' },
    { id: '8', date: new Date('2022-05-01'), image: Agra, location: 'Agra', price: 5000, details: 'Visited the Taj Mahal and Agra Fort.' },
    { id: '9', date: new Date('2024-02-23'), image: Ladakh, location: 'Ladakh', price: 11000, details: 'Bike trip through mountain passes and lakes.' },
    { id: '10', date: new Date('2023-03-15'), image: Udaipur, location: 'Udaipur', price: 5500, details: 'Boating in Lake Pichola and explored City Palace.' },
    { id: '11', date: new Date('2025-12-25'), image: Shimla, location: 'Shimla', price: 6000, details: 'Christmas snowfall and mall road shopping.' },
    { id: '12', date: new Date('2025-01-05'), image: Varanasi, location: 'Varanasi', price: 4000, details: 'Ganga aarti and boat ride at sunrise.' },
    { id: '13', date: new Date('2025-04-20'), image: Ooty, location: 'Ooty', price: 4500, details: 'Botanical gardens and toy train ride.' },
    { id: '14', date: new Date('2024-09-10'), image: Rishikesh, location: 'Rishikesh', price: 5000, details: 'River rafting and yoga by the Ganges.' },
    { id: '15', date: new Date('2023-10-05'), image: Kasol, location: 'Kasol', price: 4800, details: 'Camped near Parvati Valley and tried Israeli food.' },
    { id: '16', date: new Date('2024-06-18'), image: manali, location: 'Manali', price: 17800, details: 'Snow trek and beautiful views of mountains.' },
    { id: '17', date: new Date('2025-09-10'), image: goa, location: 'Goa', price: 16200, details: 'Relaxed on beaches and tried seafood.' },
    { id: '18', date: new Date('2023-08-05'), image: Kerala, location: 'Kerala', price: 6900, details: 'Houseboat ride and backwater exploration.' },
    { id: '19', date: new Date('2025-09-01'), image: Ladakh, location: 'Ladakh', price: 11000, details: 'Bike trip through mountain passes and lakes.' },
    { id: '20', date: new Date('2025-04-01'), image: Agra, location: 'Agra', price: 5000, details: 'Visited the Taj Mahal and Agra Fort.' },
    { id: '21', date: new Date('2025-09-15'), image: jaipur, location: 'Jaipur', price: 4500, details: 'Visited forts and enjoyed traditional thali.' },

];

    const [trip, setTrips] = useState(tripsList);

    const addTrip = (trip) => {
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
      <div className="global-bg-icons">
        <FaPlane className="global-icon" style={{ top: '10%', left: '4%' }} />
        <FaMapMarkedAlt className="global-icon" style={{ top: '-1%', left: '75%' }} />
        <FaMountain className="global-icon" style={{ top: '26%', left: '90%' }} />
        <FaMapMarkedAlt className="global-icon" style={{ top: '30%', left: '5%' }} />
      </div>

      <h1 className="heading">Trip Log & Planner</h1>
      
      <Forms onAddTrip={addTrip} />
      <TripBoard trips={trip} />

    </div>
  );
}

export default App;