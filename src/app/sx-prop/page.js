// From https://mui.com/system/getting-started/usage/
import * as React from 'react';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Box from '@mui/material/Box';

export default function Why() {
  return (
    <Box
      sx={{
        //bgcolor: 'background.pager',
        bgcolor: 'lightblue',
        boxShadow: 1,
        borderRadius: 1,
        p: 2,
        minWidth: 300,
      }}>
      <Box sx={{ color: 'text.secondary' }}>Sessions</Box>
      <Box sx={{ color: 'test.primary', fontSize: 34, fontWeight: 'medium'}}>
        98.3 K
      </Box>
      <Box
        component={TrendingUpIcon}
        sx={{ color: 'success.dark', fontSize: 16, verticalAlign: 'sub'}}>
      </Box>
      <Box
        sx={{
          color: 'success.dark',
          disply: 'inline',
          fontWeight: 'medium',
          mx: 0.5,
        }}>
        18.77%
      </Box>
      <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 12 }}>
        vs. last week
      </Box>
    </Box>
  );
}