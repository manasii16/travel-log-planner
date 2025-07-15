**Trip Log & Planner**
A full-featured React web application to log, plan, and visualize trips. It includes interactive charts, trip filtering, image uploads, and data visualization for trip budgets and frequency. Built with React, Material UI, and Recharts.

**Features**
1. Add new trips with image, location, date, price, and description
2. Upload trip images and preview dynamically
3. Filter trips by Year and Month
4. Visual charts:
    -Trips per Month (Bar Chart)
    -Budget per Year (Bar Chart)
    -Responsive UI using Material UI
    -Charting with Recharts

**Tech Stack**
1. React (Functional Components + Hooks)
2. Material UI (@mui)
3. Recharts
4. Day.js (@mui/x-date-pickers)


**Changes Made**

- Trip Filtering Component
    Added a dedicated component TripFilter.jsx for year and month-based filtering using dropdowns.

- Charting Functionality in TripDashboard.jsx
   1.  Trips per Month (Bar Chart)
   2. Budget per Year (Bar Chart with upper limit set to ₹90,000)
   3. Utilized ResponsiveContainer from Recharts
