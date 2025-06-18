import React from 'react';
import './TripFilter.css';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function TripFilter({ selectedYear, selectedMonth, onFilterChange }){
    const years = ['2021','2022','2023', '2024', '2025'];
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November' , 'December'
    ];


    function handleChange(event) {
        const { name, value } = event.target;
        onFilterChange(name, value);
        console.log("tripfilter - ",name, value);
    }

    return(
        <div className="trip-filter">
            <Box className="filter-box">
                <FormControl fullWidth variant="standard" className='custom-select'>
                <InputLabel>Year</InputLabel>
                <Select
                    name="year"
                    value={selectedYear}
                    onChange={handleChange}
                    label="Year"
                >
                    <MenuItem value="">Show All</MenuItem>
                    
                    {years.map((year) => (
                    <MenuItem key={year} value={year}>
                        {year}
                    </MenuItem>
                    ))}
                </Select>
                </FormControl>
            </Box>

            <Box className="filter-box">
                <FormControl fullWidth variant="standard" className='custom-select'>
                <InputLabel >Month</InputLabel>
                <Select
                    name="month"
                    value={selectedMonth}
                    onChange={handleChange}
                    label="Month"
                >
                    <MenuItem value="">Show All</MenuItem>
                    
                    {months.map((month) => (
                    <MenuItem key={month} value={month}>
                        {month}
                    </MenuItem>
                    ))}
                </Select>
                </FormControl>
            </Box>

            {/* <Box className="filter-box">
                <FormControl fullWidth className='custom-select'>
                <InputLabel variant="standard" htmlFor="month-native-select">
                    Month
                </InputLabel>
                <NativeSelect
                    value={selectedMonth}
                    onChange={handleChange}
                    inputProps={{
                    name: 'month',
                    id: 'month-native-select',
                    }}
                >
                    <option value="">Show All</option>
                    {months.map((month) => (
                    <option key={month.value} value={month.value}>
                        {month.name}
                    </option>
                    ))}
                </NativeSelect>
                </FormControl>
            </Box> */}
            
            {/* <Box className="filter-box">
                <FormControl fullWidth className='custom-select'>
                <InputLabel variant="standard" htmlFor="year-native-select">
                    Year
                </InputLabel>
                <Select
                    value={selectedYear}
                    onChange={handleChange}
                    inputProps={{
                    name: 'year',
                    id: 'year-native-select',
                    }}
                >
                    <MenuItem value="">Show All</MenuItem>
                    {years.map((year) => (
                    <MenuItem key={year} value={year}>
                        {year}
                    </MenuItem>
                    ))}
                </Select>
                </FormControl>
            </Box>  */}
    </div>
    );
};



