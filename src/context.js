import React,{useReducer,useEffect} from 'react'
import data from './data'
const initialState={
    rooms:[],
    loading:true,
}
const roomReducer=(state,action)=>{
        switch(action.type){
            case "GET_ROOMS": 
            return {rooms:action.payload,loading:false}
        }

}
export const RoomContext=React.createContext();
export const RoomProvider=({children})=>{
    const [roomsState,dispatch]=useReducer(roomReducer,initialState);
    const {rooms,loading}=roomsState;
    useEffect(()=>{
        dispatch({type:"GET_ROOMS",payload:data})
    },[])
    return(
        <RoomContext.Provider value={{rooms,loading}}>
            {children}
        </RoomContext.Provider>
    )
}   
