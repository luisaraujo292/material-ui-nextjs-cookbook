import React from 'react';
import Paper from '@mui/material/Paper';
import Grid  from '@mui/material/Grid';

export default function UnderstandingBreakpoints() {
  return (
    <div>
      <Grid container spacing={4} 
            sx={{border:1}}>
        <Grid item xs={12} sm={8} md={3}>
          <Paper sx={{padding: 2, textAlign:'center', color: 'blue', border:1}}>xs=12 sm=6 md=3</Paper>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Paper sx={{padding: 2, textAlign:'center', color: 'blue', border:1}}>xs=12 sm=6 md=3</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{padding: 2, textAlign:'center', color: 'blue', border:1}}>xs=12 sm=6 md=3</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{padding: 2, textAlign:'center', color: 'blue', border:1}}>xs=12 sm=6 md=3</Paper>
        </Grid>
      </Grid>
    </div>
  )
}