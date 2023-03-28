import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <Box>
            <AppBar>
                <Toolbar>
                    <Typography align='right' variant='h6' component='div' >student login</Typography>
                    <Button color="inherit">
                        <Link to='/view' style={{ color: 'white', Align: 'right', textDecoration: 'none' }}>VIEW</Link></Button>
                    <Button color="inherit"><Link to='/add' style={{ color: 'white', Align: 'right', textDecoration: 'none' }}>ADD</Link></Button>

                </Toolbar>
            </AppBar>
        </Box>

    )
}

export default Navbar