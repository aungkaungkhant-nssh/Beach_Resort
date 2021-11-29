import React,{useReducer,useEffect} from 'react'
import data from './data'
const initialState={
    rooms:[...data],
    singleRoom:{},
    loading:true,
}
const roomReducer=(state,action)=>{
        switch(action.type){
            case "GET_ROOMS": 
            return {...state,loading:false};
            case "GET_ROOM":
                let findRoom=state.rooms.find((r)=>{
                        return r.fields.slug===action.payload
                });
                return {...state,loading:false,singleRoom:findRoom}
            default:return initialState
        }

}
export const RoomContext=React.createContext();
export const RoomProvider=({children})=>{
    const [roomsState,dispatch]=useReducer(roomReducer,initialState);
    const {rooms,singleRoom,loading}=roomsState;
    //all rooms get
    const getRoomsHandler=()=>{
        dispatch({type:"GET_ROOMS",payload:data})
    }
    //single room get
    const getRoomHandler=(slug)=>{
        dispatch({type:"GET_ROOM",payload:slug});
    }
    // room object
    const roomContext={
        rooms,
        singleRoom,
        loading,
        getRooms:getRoomsHandler,
        getRoom:getRoomHandler,
    }
    useEffect(()=>{
        getRoomsHandler();
    },[rooms])
    return(
        <RoomContext.Provider value={roomContext}>
            {children}
        </RoomContext.Provider>
    )
}   
