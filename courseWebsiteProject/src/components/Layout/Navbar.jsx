import React from 'react'
import { NavLink } from 'react-router'
import { Grid } from '@mui/material'
export const Navbar = () => {
    return (
        <Grid container spacing={2}>

            <Grid size={4}>
                <NavLink to={"/"} end>Home</NavLink>
            </Grid>

            <Grid size={4}>

                <NavLink to={"/video"}>Videos</NavLink>
            </Grid>

            <Grid size={4}>

                <NavLink to={"/playlist"}>Playlists</NavLink>
            </Grid>


        </Grid>
    )
}
