// src/components/tripDashboard/TripDashboard.jsx
import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line
} from 'recharts';
import './TripDashboard.css';

export default function TripDashboard({ trips }){

    //trips per month chart
    const months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];

    const tripsPerMonth = months.map((monthName, index) =>{

        const countofTrips = trips.filter((trip) =>{
            
            const tripMonthIndex = new Date(trip.date).getMonth(); 
            return tripMonthIndex === index;
        }).length;

    return { month: monthName, trips: countofTrips };
    });


  //Budget Per Year Chart
    const budgetPerYear = [];

    trips.forEach((i) => {
        const year = new Date(i.date).getFullYear();
        const price = Number(i.price);

        let yearData = null;
        for (let item of budgetPerYear){
            if (item.year === year){
                yearData = item;
                // console.log(item.year);
                // console.log(yearData);
                break;
            }
        }
        if (yearData){
            yearData.total += price;
        } 
        else{
            budgetPerYear.push({ year: year, total: price });
        }
    });
    console.log(budgetPerYear);


  return (
    <div className="dashboard-wrapper">

      <div className="charts-row">
        <div className="chart-container">
            <h3>Trips Per Month</h3>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={tripsPerMonth}>
                <XAxis dataKey="month" angle={-30} textAnchor="end" />
                <YAxis allowDecimals={false} />
                <Tooltip cursor={{fill: 'transparent'}}/>
                {/* <Legend /> */}
                <Bar dataKey="trips" fill="#3A6D8C" top={30} />
                </BarChart>
            </ResponsiveContainer>
        </div>

        <div className="chart-container">
            <h3>Budget Per Year</h3>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={budgetPerYear}>
                <XAxis dataKey="year" />
                <YAxis allowDecimals={false} 
                  domain={[0,90000]}
                  ticks={[0,10000,20000,30000,40000,50000,60000,70000,80000,90000]}
                />
                <Tooltip cursor={{fill: 'transparent'}}/>
                {/* <Legend /> */}
                <Bar dataKey="total" fill="#3A6D8C"  top={30}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
</div>
);
}
