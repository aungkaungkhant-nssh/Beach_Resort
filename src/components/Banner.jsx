import React from 'react'
import {Paper, Typography} from '@mui/material'
import {Button} from '@mui/material'

function Banner({title,subtitle,children}) {
    
    return (
        <Paper sx={{height:"100px",padding:"30px 100px",marginTop:"90px",textAlign:"center",textTransform:"uppercase",backgroundColor:"rgba(0, 0, 0, 0.5)",}}>
            <Typography variant="h6" component="div" color="secondary" sx={{marginBottom:"10px"}}>
                    {title}
            </Typography>
            <Typography variant="p" component="div" color="secondary.light" sx={{marginBottom:"15px"}}>
                    {subtitle}
            </Typography>
            <Button variant="contained" color="warning">
                {children}
            </Button>
      
        </Paper>
    )
}

export default Banner
