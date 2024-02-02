import React from 'react';

import Paper from '@mui/material/Paper';
import Grid  from '@mui/material/Grid';
import Chip  from '@mui/material/Chip';
import { grey } from '@mui/material/colors';

export default function FillingSpace() {
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>
         {/*<Grid container justifyContent='justify'>*/}
            <Grid container justifyContent='center'>
              <Grid item>
                <Chip label="xs=12" />
              </Grid>
              <Grid item>
                <Chip label="sm=6" />
              </Grid>
              <Grid item>
                <Chip label="md=3" />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>
            <Grid container>
              <Grid item>
                <Chip label="xs=12" />
              </Grid>
              <Grid item>
                <Chip label="sm=6" />
              </Grid>
              <Grid item>
                <Chip label="md=3" />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>
            <Grid container>
              <Grid item>
                <Chip label="xs=12" />
              </Grid>
              <Grid item>
                <Chip label="sm=6" />
              </Grid>
              <Grid item>
                <Chip label="md=3" />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>
            <Grid container>
              <Grid item>
                <Chip label="xs=12" />
              </Grid>
              <Grid item>
                <Chip label="sm=6" />
              </Grid>
              <Grid item>
                <Chip label="md=3" />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}