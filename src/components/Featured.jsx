import { Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import data from '../data'
import Room from './Room'
import { makeStyles } from '@mui/styles';
import { RoomContext } from '../context';
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
    const {rooms,singleRoom,loading,getRooms}=useContext(RoomContext)
    let featuredRoom=rooms.filter((d)=>(d.fields.featured))
    featuredRoom=featuredRoom.map((r)=>(<Room room={r.fields}/>))
    return (
        <div className={classes.featured}>
             <Typography variant="h5" component="div">
                Featured
             </Typography>
             <div className={classes.featuredRoomCenter}>
                    {!loading&&featuredRoom}
             </div>
        </div>
    )
}

export default Featured
