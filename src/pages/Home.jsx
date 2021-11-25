import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import { makeStyles } from '@mui/styles';
import Featured from '../components/Featured';
;
const useStyles = makeStyles((theme)=>({
        bannerLink:{
            color:theme.palette.secondary.main
        }
  }));
function Home() {
    const classes=useStyles()
    return (
        <>
            <Hero hero="defaultHero">
                <Banner title="luxurious rooms"   subtitle="deluxe rooms starting at $299">
                    <Link to="/rooms" className={classes.bannerLink}>our rooms</Link>
                </Banner>
            </Hero>
            <Featured />
        </>
    )
}

export default Home
