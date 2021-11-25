import { Typography } from '@mui/material'
import React from 'react'
import data from '../data'
import Room from './Room'
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme)=>({
   featured:{
       textAlign:"center",
       marginTop:"20px",
   },
   featuredRoomCenter:{
        width: "80vw",
        margin: "30px auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
        gridRowGap: "2rem",
        gridcolumnGap: "40px"
   },
}));
function Featured() {
    const classes=useStyles()
    let featuredRoom=data.filter((d)=>(d.fields.featured))
    featuredRoom=featuredRoom.map((r)=>(<Room room={r.fields}/>))
    return (
        <div className={classes.featured}>
             <Typography variant="h5" component="div">
                Featured
             </Typography>
             <div className={classes.featuredRoomCenter}>
                    {featuredRoom}
             </div>
        </div>
    )
}

export default Featured
