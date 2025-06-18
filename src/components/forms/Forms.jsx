import React, { useState } from 'react';
import { TextField, Button, Typography, Card, CardContent, Box,} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import './Forms.css';

export default function Forms({onAddTrip}) {

  const [formData, setFormData] = useState({
    image: null,
    name: '',
    description: '',
    price: '',
    date: null,
    formattedDate: '',
  });

  const handleChange = (e) => {
    const input = e.target;
    
    let newValue;
    if(input.type === 'file'){
      newValue = input.files[0];
    } else{
      newValue = input.value;
    }    
    const fieldName = input.name;

    setFormData((data) => ({
      ...data,
      [fieldName]: newValue,
    }));
  };

  const handleDateChange = (newDate) => {
    const formattedDate = new Date(newDate).toLocaleDateString();

    setFormData((prev) => ({
      ...prev,
      date: newDate,
      formattedDate: formattedDate,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //send data to parent
    const newTrip = {
      id: Date.now().toString(),
      image: formData.image,
      location: formData.name,
      price: Number(formData.price),
      details: formData.description,
      date: new Date(formData.date),
    };
    onAddTrip(newTrip);

    if (!formData.date) {
      alert("Please select a valid date");
      return;
    }

    const obj = {
      ...formData,
      date: formData.formattedDate,
    };

    console.log(obj);
    alert('Form submitted');

    setFormData({
      image: null,
      name: '',
      description: '',
      price: '',
      date: null,
      formattedDate: '',
    });

  };

  return (
    <Box className="form-container">
      <Card className="form-card">
        <CardContent>
          <Typography variant="h6" className="form-title">
            <b>Add Trip Details</b>
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField label="Location Name" name="name" value={formData.name}
              onChange={handleChange} fullWidth margin="normal" variant="standard"/>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateField
                label="Date"
                value={formData.date}
                onChange={handleDateChange}
                fullWidth
                margin="normal"
                variant="standard"
              />
            </LocalizationProvider>

            <TextField label="Description" name="description" value={formData.description} onChange={handleChange} fullWidth
              multiline  margin="normal" variant="standard"/>

            <TextField label="Price" name="price" type="number" value={formData.price} onChange={handleChange} fullWidth
              margin="normal" variant="standard"/>

            <Box className="button-group">
              <Button variant="outlined" component="label" className="form-img">
                {!formData.image ? 'Upload Image' : 'Change Image'}

                <input type="file" hidden id="image-input" name="image" onChange={handleChange}/>
              </Button>

              <Button type="submit" variant="contained" className="form-submit">
                Submit
              </Button>
            </Box>

          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
