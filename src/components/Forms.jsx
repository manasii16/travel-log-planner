import React, { useState } from 'react';
import { TextField, Button, Typography, Card, CardContent, Box,} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import './Forms.css';

export default function Forms() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState(null);


  const handleNameChange = (e) => setName(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);
  const handleImageChange = (e) => setImage(e.target.files[0]);
  const handleDateChange = (newDate) => setDate(newDate);

  let formatDate = '';

    if(date){
      const newDate = new Date(date);
      formatDate = newDate.toLocaleDateString();
    }

    let buttonText;
    if(image){
      buttonText = 'Change Image';
    }else{
      buttonText = 'Upload Image';
    }

  const handleSubmit = (e) => {
    e.preventDefault();

    const obj = {
      image, name, description, price, date:formatDate
    }
    console.log(obj);
    alert('Form submitted');

    setImage(null);
    setName('');
    setDescription('');
    setPrice('');
    document.getElementById('image-input').value = '';
    setDate(null);
  };

  return (
    <Box className="form-container">
      <Card className="form-card">
        <CardContent>
          <Typography variant="h6" className="form-title">
            Adventure Form
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField label="Location Name" name="name" value={name}
              onChange={handleNameChange} fullWidth margin="normal" variant="standard"/>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateField
                label="Date"
                value={date}
                onChange={handleDateChange}
                fullWidth
                margin="normal"
                variant="standard"
              />
            </LocalizationProvider>

            <TextField label="Description" name="description" value={description} onChange={handleDescriptionChange} fullWidth
              multiline  margin="normal" variant="standard"/>

            <TextField label="Price" name="price" type="number" value={price} onChange={handlePriceChange} fullWidth
              margin="normal" variant="standard"/>

            <Box className="button-group">
              <Button variant="outlined" component="label" className="form-img">
                {buttonText}
                <input type="file" hidden id="image-input" onChange={handleImageChange}/>
              </Button>

              <Button type="submit" variant="contained" color="info" className="form-submit">
                Submit
              </Button>
            </Box>

          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
