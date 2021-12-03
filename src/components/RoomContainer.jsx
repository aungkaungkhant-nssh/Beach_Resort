import React, { useContext } from 'react'
import { RoomContext } from '../context';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';

function RoomContainer() {
    const {rooms,sortedRooms,type,capacity,price,size,loading,breakfast,pets,handleChange}=useContext(RoomContext);
     if(loading){
         return <h1>Loading...</h1>
     }
    return (
        <div style={{marginTop:"30px"}}>
            <RoomFilter rooms={rooms} type={type} capacity={capacity} price={price} size={size} handleChange={handleChange} breakfast={breakfast} pets={pets}/>
            <RoomList  sortedRooms={sortedRooms}/>
        </div>
    )
}

export default RoomContainer
