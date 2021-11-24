import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import { makeStyles } from '@mui/styles';
;
const useStyles = makeStyles((theme)=>({
        bannerLink:{
            color:theme.palette.secondary.main
        }
  }));
function Rooms() {
    const classes=useStyles()
    return (
        <Hero hero="roomsHero">
            <Banner title="our rooms">
                <Link to="/" className={classes.bannerLink}>Home Page</Link>
            </Banner>
        </Hero>
    )
}

export default Rooms
