#  Trip Log & Planner

A responsive React application for logging past trips and planning upcoming ones with interactive cards, filters, and data visualization.

---

## Features

- Add and track trips with date, destination, cost, and description
- Filter trips by year and month
- Dashboard charts for trip count and cost overview
- Responsive trip cards with images
- Animated background icons for added visual flair
- Mobile-first responsive design

---

##  Tech Stack

- **React** (v18+)
- **React Icons** – for travel-themed icons
- **CSS Grid & Flexbox** – layout and responsive design
- **Date parsing** – using JS `Date()` and `.toLocaleDateString()` for filters

---

**Project Setup**
1. Clone the Repo - git clone https://github.com/manasii16/travel-log-planner.git
2. cd trip-log-planner
3. Install Dependencies - npm install
4. Run the Development Server - npm start / npm run dev

---

##  Dependencies

Install these with `npm install`:

npm install react react-dom react-icons

---

## Known Issues

If you see Uncaught ReferenceError: FaMapMarkedAlt is not defined, make sure to import it from react-icons/fa:

import { FaMapMarkerAlt } from 'react-icons/fa';

---

## Future Enhancements

- Save trips using localStorage or cloud DB like Firebase
- Add calendar view for trip plans
- Add search bar for destinations
- View all trips on a map
