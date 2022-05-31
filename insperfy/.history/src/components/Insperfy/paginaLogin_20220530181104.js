import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Login() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0} sx={{ height: "100vh" }}>
                <Grid item xs={12} sx={{ height: "15vh" }}>
                        <Typography>Insper<span style={color:}>fy</span></Typography>
                </Grid>
                <Grid item xs={12} sx={{ height: "70vh", backgroundColor: "var(--lighterBg)" }}>
                    <p> Item 2 </p>
                </Grid>
                <Grid item xs={12} sx={{ height: "15vh" }}>
                    <p> Item 3 </p>
                </Grid>

            </Grid>
        </Box>
    );
}