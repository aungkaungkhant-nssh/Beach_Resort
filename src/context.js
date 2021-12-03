import React,{useReducer,useEffect} from 'react'
import data from './data'
const initialState={
    rooms:[...data],
    sortedRooms:[...data],
    type:"all",
    capacity:1,
    price:0,
    size:0,
    breakfast:false,
    pets:false,
    singleRoom:{},
    loading:true,
}
const roomReducer=(state,action)=>{
        switch(action.type){
            case "GET_ROOMS": 
            return {...state,loading:false,
                type:'all',
                price:Math.max(...state.rooms.map((p)=>(p.fields.price))),
                size:Math.max(...state.rooms.map((p)=>(p.fields.size)))
            };
            case "HANDLE_CHANGE":
                return {
                    ...state,
                    loading:false,
                    [action.payload.name]:action.payload.value,
                }
            case "CHANGE":
                let temp=[...state.rooms];
                if(state.type!=="all"){
                   temp = [...temp.filter((r)=>(r.fields.type==state.type))]
                   
                }

                if(state.capacity!=1){
                    temp = [...temp.filter((r)=>(r.fields.capacity>=state.capacity))]
                }

                if(state.breakfast){
                    temp = [...temp.filter((r)=>(r.fields.breakfast==true))];
                }

                if(state.pets){
                    temp =[...temp.filter((r)=>(r.fields.pets==true))]
                }

                temp = temp.filter((r)=>(r.fields.price<=state.price))
                temp = temp.filter((r)=>(r.fields.size<=state.size))
    
                return {
                    ...state,
                    sortedRooms:temp,
                }
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

    //destruct roomState data

    const {rooms,sortedRooms,type,capacity,price,size,singleRoom,loading,breakfast,pets}=roomsState;
    //all rooms get
    const getRoomsHandler=()=>{
        dispatch({type:"GET_ROOMS",payload:data})
    }
    //single room get
    const getRoomHandler=(slug)=>{
        dispatch({type:"GET_ROOM",payload:slug});
    }
    
    const setHandleChange=(e)=>{
        if(e.target.value=="all"){
            getRoomsHandler();
            dispatch({type:"CHANGE"})
            return 
        }
        if(e.target.value=="breakfast" || e.target.value=="pets"){
            dispatch({type:"HANDLE_CHANGE",payload:{name:e.target.value,value:e.target.checked}})
            dispatch({type:"CHANGE"})
            return 
        }
         dispatch({type:"HANDLE_CHANGE",payload:{name:e.target.name,value:e.target.value}})
         dispatch({type:"CHANGE"})
        
    }
   
    // room object
    const roomContext={
        rooms,
        sortedRooms,
        type,
        capacity,
        price,
        size,
        singleRoom,
        loading,
        breakfast,
        pets,
        getRooms:getRoomsHandler,
        getRoom:getRoomHandler,
        handleChange:setHandleChange
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
