import React from 'react'
import Room from './Room'
import { makeStyles } from '@mui/styles';
import {Typography} from '@mui/material'
const useStyles = makeStyles((theme)=>({
    roomslist:{
        padding: "2rem 0",
        "& .roomslist-center":{
            width: "80vw",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
            gridRowGap: "2rem",
            gridcolumnGap: "30px"
        }
    }
   
 }));
function RoomList({sortedRooms}) {
    const classes=useStyles();
    if(sortedRooms.length==0){
        return (
            <div className={classes.emptySearch}>
                <Typography variant="h6" sx={{textAlign:"center",textTransform:"capitalize",margin:"2rem 0",padding:"1rem",letterSpacing:"1px"}}>
                        unfortunately no rooms matched your search parameters
                </Typography>
          </div>
        )
    }
    return (
        <section className={classes.roomslist}>
            <div className="roomslist-center">
                {sortedRooms.map(item => {
                return <Room key={item.id} room={item.fields} />;
                })}
            </div>
        </section>
    )
}

export default RoomList
