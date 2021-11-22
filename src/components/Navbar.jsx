import React,{useState} from 'react'
import {AppBar,Toolbar,Typography} from '@mui/material';
import {Link} from 'react-router-dom'
import { makeStyles } from '@mui/styles';
import { useLocation } from 'react-router-dom';
const useStyles = makeStyles((theme)=>({
    link: {
        '& li':{
            display:"inline-block"
        },
       '& li a':{
           color:theme.palette.dark.main,
            textDecoration:"none",
            marginRight:theme.spacing(3),
            transition:"all 0.5s ease",
            
        },
        '& a:hover':{
            color:theme.palette.dark.light
        },
        
    },
     active:{
         "& a":{
            color:`${theme.palette.primary.main} !important`
         }
     
    },
    
  }));
function Navbar(props) {
    const classes = useStyles();
    const location = useLocation();  
    const [navLinks,setNavlinks]=useState([{name:"Home",path:''},{name:"Rooms",path:"rooms"}])
    const { pathname } = location;
    const splitLocation=pathname.split("/");
    return (
        <AppBar sx={{backgroundColor:"#b0bec5",padding:"0px 100px"}} position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Beach Resort
                </Typography>
                <ul className={`${classes.link} `}>
                    {
                        navLinks.map(({name,path})=>(
                            <li className={path==splitLocation[1]&&classes.active}>
                                 <Link to={path} >{name}</Link>
                            </li>
                           
                        ))
                    }
                
                </ul>
                
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
