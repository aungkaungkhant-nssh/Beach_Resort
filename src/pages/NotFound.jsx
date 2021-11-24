import React from 'react'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import {Link} from 'react-router-dom'
import { makeStyles } from '@mui/styles';
;
const useStyles = makeStyles((theme)=>({
    bannerLink:{
        color:theme.palette.secondary.main
    }
}));
function NotFound() {
    const classes=useStyles()
    return (
            <Hero hero="defaultHero">
                <Banner title="not found" subtitle="404 page">
                   <Link to="/"  className={classes.bannerLink}>Home Page</Link>
                </Banner>
            </Hero>
    )
}

export default NotFound
