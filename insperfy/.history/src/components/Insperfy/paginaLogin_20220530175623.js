import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
export default function Login() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0} sx={{height:"100vh"}}>
                <Grid item xs={12} sx={{height:"15vh"}}>
                    <p> Item 1 </p>
                </Grid>
                <Grid item xs={12} sx={{height:"60vh"}}>
                    <p> Item 2 </p>
                </Grid>
                <Grid item xs={12} sx={{height:"15vh"}}>
                    <p> Item 3 </p>
                </Grid>

            </Grid>
        </Box>
    );
}