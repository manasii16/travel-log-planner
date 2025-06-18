**🧳 Trip Log & Planner**
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

**Project Setup**
1. Clone the Repo
git clone https://github.com/manasii16/trip-log-planner.git
cd trip-log-planner

2. Install Dependencies
npm install

3. Run the Development Server
npm start
npm run dev


**Folder Structure**
src/
│
├── App.jsx
├── assets/                # Trip images
├── components/
│   ├── cards/             # Card UI wrapper
│   ├── forms/             # Form to add new trip
│   ├── tripBoard/         # Renders all trips as trip tickets
│   ├── tripDashboard/     # Charts - Trips per Month & Budget per Year
│   ├── tripDateImage/     # Image + Date UI component
│   ├── tripFilter/        # Trip filter (year/month)
│   ├── tripTicket/        # Single trip card
│
├── App.css
├── index.js
└── README.md

**Changes Made**
✅ Replaced Native HTML Select with Material UI Select

<Select variant="standard"> // Better UX with MUI dropdown styling
✅ Trip Filtering Component
Added a dedicated component TripFilter.jsx for year and month-based filtering using dropdowns.

✅ Dynamic Image Upload
Used URL.createObjectURL() to preview uploaded image before submitting trip.

Added image input to the Forms component:
<input type="file" ... />
✅ Charting Functionality in TripDashboard.jsx
Trips per Month (Bar Chart)

Budget per Year (Bar Chart with upper limit set to ₹90,000)

Utilized ResponsiveContainer from Recharts

✅ Validation & Notifications
Simple alert for missing date input

Success message displayed on successful trip submission

✅ Code Restructure
Separated logic into reusable components: Cards, TripTicket, TripDashboard, Forms, etc.

Better file organization and naming