# Travel Log and Planner Application

This application displays a timeline of your past or planned trips, showing key details for each destination. It's designed to provide a clear and organized view of your travel experiences.

## How It Works

The application presents a list of trips, with each trip featured on a separate "ticket." Each ticket provides:

-   An image representing the trip's location.
-   The date of the trip.
-   The name of the location.
-   The cost of the trip.
-   A brief description of what was done or experienced there.

## What's Inside 

This project is built using React and is structured into several components to manage different parts of the user interface:

-   TripBoard.js: This is the main component that orchestrates the entire timeline. It holds the data for all the trips and maps through them to render individual TripTicket components.

-   TripTicket.js: Represents a single trip entry. It receives trip details as properties and arranges them visually. It makes use of the Card and TripDateImage components.

-   TripDateImage.js: A sub-component within TripTicket responsible for displaying the trip's image and its date prominently.

-   Cards.js: A reusable wrapper component that provides a consistent styling (like a card-like background and shadow) for other components, such as the TripTicket.

### Styling

-   CSS files (e.g., `TripBoard.css`, `TripTicket.css`, `Cards.css`, `TripDateImage.css`) are used to apply styling to the respective components. This keeps the styles organized and component-specific.

### Data Management

-   The trip data is currently hardcoded within the `TripBoard.js` component as an array of JavaScript objects. Each object contains properties like `id`, `date`, `image`, `location`, `price`, and `details`. In a real-world application, this data would typically come from an external source like an API or a database.

## Project Structure

-   `src/components/tripBoard/TripBoard.js`: Main component.
-   `src/components/tripTicket/TripTicket.js`: Individual trip display.
-   `src/components/cards/Cards.js`: Generic card styling wrapper.
-   `src/components/tripDateImage/TripDateImage.js`: Date and image display.
-   `src/assets/`: This directory is expected to contain the image files for the trip locations (e.g., `jaipur.jpeg`, `manali.jpg`, `goa.jpeg`).
-   Corresponding `.css` files for each component.
