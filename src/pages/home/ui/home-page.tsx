'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { NewsCard } from '@/widgets/news-card';
export const HomePage = () => {
  return (
    <Box sx={{ py: 3 }}>
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from({ length: 8 }).map((_, index) => (
          <Grid key={index} size={4}>
            <NewsCard />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
