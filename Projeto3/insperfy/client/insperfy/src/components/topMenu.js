import React from "react"
import Box from '@mui/material/Box';
import logo from '../static/logo.png'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';import Divider from '@mui/material/Divider';
import "../static/topMenu.css"
export default function TopMenu() {
    return (
        <Box
        sx={{
            width: "100%",
            height: "10%",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px',
            gap: "5rem"
        }}
    >
        <img 
        src={logo}
        alt="logo"
        className="logo"
        style={{  width: "10rem",
            height: "auto",
            position: "absolute",
            top: "10px",
            left: "50px"}}
        />

        <Link to="/" style={{ textDecoration: 'none' }}>
        <Button variant="text" sx={{ color: '#ffffff',fontSize:"1.5rem" }}>Player</Button>
        </Link>
        <Link to="topSongs" style={{ textDecoration: 'none' }}>
        <Button variant="text" sx={{ color: '#ffffff',fontSize:"1.5rem"}}>Top Músicas</Button>
        </Link>
 
    </Box>
    )
}
