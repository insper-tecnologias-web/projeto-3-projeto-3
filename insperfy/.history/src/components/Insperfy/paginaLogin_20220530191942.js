import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import imagem from '../../imagem.png'
export default function Login() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0} sx={{ height: "100vh" }}>
                <Grid item xs={12} sx={{ height: "15vh" }} align="center">
                    <Typography sx={{ fontFamily: "Georgia, sans-serif", fontSize: "5rem", color: "white" }}>
                        Insper<span style={{ color: "var(--green)" }}>fy</span>
                    </Typography>
                </Grid>

                <Grid container item xs={12} sx={{ height: "70vh", backgroundColor: "var(--lighterBg)" }}>
                    <Grid item xs={5} sx={{ height: "100%"}}>
                        <img src={imagem} style={{height: "70vh", position:"relative", bottom:0}}/>
                    </Grid>
                    <Grid container item direction="column" align="center" xs={7} sx={{ height: "100%", padding:"2%", justifyContent:"center" }}>
                        <Typography sx={{ fontFamily: "Gotham, sans-serif", fontSize: "4rem", color: "white" }}>Entre com a sua </Typography>
                        <Typography sx={{ fontFamily: "Gotham, sans-serif", fontSize: "4rem", color: "white" }}>conta Spotify</Typography>
                        <Button variant="contained" sx={{backgroundColor:"var(--green)", width: "fitcontent"}}>Login com Spotify</Button>
                    </Grid>
                </Grid>

                <Grid item xs={12} sx={{ height: "15vh" }}>
      
                </Grid>

            </Grid>
        </Box>
    );
}