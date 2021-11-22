import React from 'react'
import { makeStyles } from '@mui/styles';
import image1 from '../asset/images/image1.jpg'
const useStyles = makeStyles((theme)=>({
    hero:{
        backgroundImage:`url(${image1})`,
        display: "flex",
        alignitems: "center",
        justifyContent: "center",
        minHeight:" 60vh",
        backgroundRepeat:" no-repeat",
       backgroundPosition:"center",
       backgroundSize:"cover",
    }
}));
function Hero({children}) {
    const classes = useStyles();
    return (
        <div className={classes.hero}>
            {children}
        </div>
    )
}

export default Hero
