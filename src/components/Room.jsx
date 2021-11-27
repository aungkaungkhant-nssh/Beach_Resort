import React from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@mui/styles';

import {Button} from '@mui/material'
const useStyles = makeStyles((theme)=>({
    room:{
        boxShadow:"2px 5px 3px 0px rgba(0, 0, 0, 0.5)",
        transition: "all 0.3s linear",
        '&:hover':{
            boxShadow:'4px 10px 5px 0px rgba(0, 0, 0, 0.5)'
        },
    },
    imageContainer:{
        position:"relative",
        "&:hover":{
            background: "rgba(0, 0, 0, 0.8)",
            "& .roomLink":{
                transform:" translate(-50%, -50%) scale(1)"
            }
        },
        "& img":{
            width: "100%",
            height:"200px",
            display: "block",
            transition: "all 0.3s linear",
            "&:hover":{
                opacity:"0.3"
            }
        },
        "& .roomLink":{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "scale(0)",
            transition: "all 0.3s linear",
            "& a":{
                color:"#fff"
            }
        }
    },
     priceTop:{
        position: "absolute",
        top: "0px",
        left: "0px",
        background: "rgba(0, 0, 0, 0.8)",
        color: "#fff",
        padding: "0.3rem 0.6rem 0.5rem",
        borderBottomRightRadius: "1rem",
        fontSize: "0.5rem",
        textAlign: "center",
        transition: "all 0.3s linear",
        "& h6":{
            marginBottom: "0px",
            fontSize: "0.9rem",
            fontWeight: 300,
            letterSpacing:"2px",
            textTransform:"uppercase"
        }
    },
     roomInfo:{
        textTransform: "capitalize",
        padding: "0.5rem 0",
        textAlign: "center",
        fontWeight: 700,
        letterWpacing: "2px"
    }
}));

function Room({room}) {
    const {name,price,slug,image}=room
    const classes = useStyles();
    return (
        <article className={classes.room}>
            <div className={classes.imageContainer}>
                 <img src={image[0]}/>
                <div className={classes.priceTop}>
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                <Button  variant="contained" color="warning" className="roomLink">
                    <Link to={`/rooms/${slug}`}>
                        features
                    </Link>
                </Button>
                
            </div>
            <p className={classes.roomInfo}>{name}</p>
        </article>
    )
}

export default Room
