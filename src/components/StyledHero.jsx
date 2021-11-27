import React from 'react'
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme)=>({
    root:{
        backgroundImage:(props)=>`url(${props.image})`,
        display: "flex",
        alignitems: "center",
        justifyContent: "center",
        minHeight:" 60vh",
        backgroundRepeat:" no-repeat",
       backgroundPosition:"center",
       backgroundSize:"cover",
    },
   
    default:{
    
    }
}));
export default function StyledHero({children,image}) {
    const classes = useStyles({image});
    return (
        <div className={classes.root}>
            {children}
        </div>
    )
}


