import React from 'react'
import Hero from './Hero'
import {Button} from '@mui/material'
import Banner from './Banner'
import {Link} from 'react-router-dom'
import { makeStyles } from '@mui/styles';
;
const useStyles = makeStyles((theme)=>({
        bannerLink:{
            color:theme.palette.secondary.main
        }
  }));
function Home() {
    const classes=useStyles()
    return (
        <div>
           <Hero>
                <Banner title="luxurious rooms"   subtitle="deluxe rooms starting at $299">
                    <Button variant="contained" color="warning">
                        <Link to="/rooms" className={classes.bannerLink}>our rooms</Link>
                    </Button>
                </Banner>
           </Hero>
        </div>
    )
}

export default Home
