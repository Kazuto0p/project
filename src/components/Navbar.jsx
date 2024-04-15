import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <AppBar  color='success'>
        {/* <Typography>BlogApplication</Typography> */}
      <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Login
          </Typography>
         
                <Button variant="contained" color="warning"><Link to ='New'style={{textDecoration: 'none' ,color:'white'}}>Home</Link> </Button>&nbsp;
                <Button variant="contained" color="warning"><Link to ='Login' style={{textDecoration: 'none' ,color:'white'}}>Login</Link> </Button>&nbsp;
 
            </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar