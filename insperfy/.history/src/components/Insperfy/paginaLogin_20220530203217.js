import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import imagem from '../../imagem.png'

const CustomButton = styled(Button)({
    backgroundColor: "var(--green)",
    fontSize: "1.8rem",
    width: "fit-content",
    marginTop: "3rem",
    '&:active': {
        boxShadow: 'none',
        backgroundColor: "var(--green)",
        borderColor: "var(--green)",
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem hsla(141,73,255,.5)',
    },
    '&:hover': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});


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
                    <Grid item xs={5} sx={{ height: "100%" }}>
                        <img src={imagem} style={{ height: "70vh", position: "relative", bottom: 0 }} />
                    </Grid>
                    <Grid container item direction="column" xs={7} sx={{ height: "100%", padding: "2%", justifyContent: "center", alignItems: "center" }}>
                        <Typography sx={{ fontFamily: "Gotham, sans-serif", fontSize: "4rem", color: "white" }}>Entre com a sua </Typography>
                        <Typography sx={{ fontFamily: "Gotham, sans-serif", fontSize: "4rem", color: "white" }}>conta Spotify</Typography>
                        <CustomButton variant="contained" >Login com Spotify</CustomButton>
                    </Grid>

                    <Grid item xs={12} sx={{ height: "15vh" }}>

                    </Grid>

                </Grid>
            </Grid>
        </Box>
    );
}