import React,{useState} from 'react'
import {FormControl,Select,MenuItem,InputLabel,Typography,FormControlLabel,FormGroup,Checkbox} from '@mui/material'
import { makeStyles } from '@mui/styles';
//room type guest price size breakfast pets
const getUnique=(item,value)=>{
        return [...new Set(item.map((i)=>(i.fields[value])))]
}
const useStyles = makeStyles((theme)=>({
    filter:{
        maxWidth:"700px",
        margin:"20px auto",
        marginTop:"20px",
    },
   
 }));
function RoomFilter({rooms,type,capacity,price,size,handleChange,breakfast,pets}) {
    const classes=useStyles()
    let prices=getUnique(rooms,"price");
    let types= getUnique(rooms,"type"); 
    let guests=getUnique(rooms,"capacity");
    let sizes=getUnique(rooms,"size");
    types=["all",...types];
    return (
        <div className={classes.filter}>
            <Typography variant="h6" component="div" sx={{textAlign:"center",marginBottom:"30px"}}>
                Search Room
            </Typography>
            {/* type picker */}
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-label">Room Type</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={type}
                    label="Room type"
                    onChange={handleChange}
                    name="type"
                >
                    {
                        types.map((type)=>(
                            <MenuItem value={type}>{type}</MenuItem>
                        ))
                    }
                     
                </Select>
            </FormControl>
            {/* capacity picker */}
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-label">Guests</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={capacity}
                    label="Guests"
                    onChange={handleChange}
                    name="capacity"
                >
                    {
                        guests.map((i)=>(
                            <MenuItem value={i}>{i}</MenuItem>
                        ))
                    }
                     
                </Select>
            </FormControl>
            {/* price picker */}
            <FormControl sx={{m:1, minWidth: 120 }}>
                 <InputLabel id="demo-simple-select-label">Price</InputLabel>
                 <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={price}
                    label="Guests"
                    onChange={handleChange}
                    name="price"
               >
                    {
                        prices.map((i)=>(
                            <MenuItem value={i}>{i}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
            {/* room size picker */}
            <FormControl sx={{m:1, minWidth: 120 }}>
                 <InputLabel id="demo-simple-select-label">Room Size</InputLabel>
                 <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={size}
                    label="Room Size"
                    onChange={handleChange}
                    name="size"
               >
                    {
                        sizes.map((i)=>(
                            <MenuItem value={i}>{i}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
            {/* breakfast picker */}
            <FormControl sx={{ml:2, minWidth: 120 }}>
                <FormGroup>
                    <FormControlLabel control={<Checkbox onChange={handleChange} value="breakfast" checked={breakfast}/>} label="Breakfast" />
                    <FormControlLabel  control={<Checkbox onChange={handleChange} value="pets" checked={pets}/>} label="Pets" />
                </FormGroup>
            </FormControl>
           
        </div>
    )
}

export default RoomFilter
