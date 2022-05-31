import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
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

                <Grid item xs={12} sx={{ height: "70vh", backgroundColor: "var(--lighterBg)" }}>
                    <Grid item xs={6} sx={{ height: "100%"}}>
                        <img src={imagem} style={{height: "90%", position:"relative", bottom:"50%", transform:"translateY(-50%)" }}/>
                    </Grid>
                    <Grid item xs={6} sx={{ height: "100%" }}>

                    </Grid>
                </Grid>

                <Grid item xs={12} sx={{ height: "15vh" }}>
                    <p> Item 3 </p>
                </Grid>

            </Grid>
        </Box>
    );
}