import React from 'react';
import Paper from '@mui/material/Paper';
import Grid  from '@mui/material/Grid';

export default function UnderstandingBreakpoints() {
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>xs=12 sm=6 md=3</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>xs=12 sm=6 md=3</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>xs=12 sm=6 md=3</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>xs=12 sm=6 md=3</Paper>
        </Grid>
      </Grid>
    </div>
  )
}