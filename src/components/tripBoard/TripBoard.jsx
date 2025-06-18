import React from 'react';
import TripTicket from '../tripTicket/TripTicket';
import './TripBoard.css';
import TripFilter from '../tripFilter/TripFilter';
import { useState } from 'react';
import TripDashboard from '../tripDashboard/TripDashboard';


export default function TripBoard({ trips }){
    const [filters, setFilters] = useState({
        year: '2025',
        month: '',
    });

    function handleFilterChange(name, value) {
      setFilters((prev) => ({
        ...prev,
        [name]: value
      }));
      // console.log(value);
    }
    

    const filterTrips = trips.filter((i)=>{
      const date = new Date(i.date);
      const extractYear = date.getFullYear().toString();
      const extractMonth = date.toLocaleDateString('default',{month: "long"});

      const filterYear = !filters.year || filters.year===extractYear;
      // console.log(filterYear);
      const filterMonth = !filters.month || filters.month===extractMonth;
      // console.log(filterMonth);
      
      return filterYear && filterMonth;
    })

    
   return (
    <div className="trip-board">
      <h1 className="title">Trips Timeline</h1>

      <TripFilter
        selectedYear={filters.year}
        selectedMonth={filters.month}
        onFilterChange={handleFilterChange}
      />

      {filterTrips.length > 0 ? (
        <div>
          <TripDashboard trips={filterTrips} />

          <h2 className="trip-title">Trips List</h2>
          <div className="trip-list">
            {filterTrips.map((trip) => (
              <TripTicket 
              key={trip.id} 
              trip={trip} 
              />
            ))}
          </div>
        </div>
        ) : (
        <div className="no-trips-wrapper">
          <p className="no-trips">No trips data found for the selected filters.</p>
        </div>
      )}
    </div>
  );
}



// Trip Log & Planner