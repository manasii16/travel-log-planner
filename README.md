# Travel Form Application

This application provides a simple form to capture details about an adventure or trip. It allows users to input information such as location name, date, description, price, and upload an image.

## How It Works

The form is designed for easy data entry:

- Location Name
- Date
- Description
- Price
- Image Upload: Choose an image file from your computer to represent the trip. The button text changes dynamically based on whether an image has been selected.
- Submit: Once all details are filled, submit the form. Currently, the submitted data is logged to the browser's console and a confirmation alert is shown. After submission, the form fields are cleared.

## What's Inside

This project is built using React and leverages Material-UI components for a clean and consistent user interface.

- React: The core library for building the user interface.
- State Management:
    - `useState`: Used to manage the form's input fields (image, name, description, price, date). This allows the component to re-render and update the UI as the user types or selects options.
-   MUI (Material-UI): A popular React UI library that provides a wide range of pre-designed and customizable components.

-   MUI X Date Pickers:
    - `LocalizationProvider` and `AdapterDayjs`: Essential for providing date utilities to the date picker.
    - `DateField`: A specialized text field component for date input with a built-in date picker functionality.
-   CSS: Custom CSS (defined in `Forms.css`) is used to apply specific styling, such as centering the form and styling buttons.

### Form Handling

-   The form uses controlled components, meaning that React state manages the value of each input field.
-   `handleNameChange`, `handleDescriptionChange`, `handlePriceChange`, `handleImageChange`, and `handleDateChange` are event handlers that update the corresponding state variables when the user interacts with the form inputs.
-   `handleSubmit`: This function is called when the form is submitted. It prevents the default form submission behavior, creates an object with the form data, logs it, shows an alert, and then resets all form fields.

## form folder Structure

- `src/components/forms/Forms.js`: The main React component containing the adventure form.
- `src/components/forms/Forms.css`: The stylesheet for the Forms component.
