import React, { useEffect } from 'react'
import { makeStyles } from '@mui/styles';
import image1 from '../asset/images/image1.jpg'
import image2 from '../asset/images/image2.jpg'
const useStyles = makeStyles((theme)=>({
    defaultHero:{
        backgroundImage:`url(${image1})`,
    },
    roomsHero:{
        backgroundImage:`url(${image2})`,
    },
    default:{
        display: "flex",
        alignitems: "center",
        justifyContent: "center",
        minHeight:" 60vh",
        backgroundRepeat:" no-repeat",
       backgroundPosition:"center",
       backgroundSize:"cover",
    }
}));
function Hero({children,hero}) {
    const classes = useStyles();
   
    return (
        <div className={`${classes.default} ${classes[hero]}`}>
            {children}
        </div>
    )
}
export default Hero
