import React from 'react';
import { Card, CardContent, Grid, Typography, useTheme } from '@mui/material';

interface SupportStickerItemProps {
    title: string;
    description: string;
    color: string;
    id: string;
}

const SupportStickerItem: React.FC<SupportStickerItemProps> = ({title, description, color, id}) => {
    const theme = useTheme()
  return (
    <>
      <Grid item xs={12} md={4} sx={{':hover':{ transform: 'scale(1.05)', transition: 'transform 0.3s' }}}>
        <Card sx={{ bgcolor: color, borderRadius: '25px', p:'10px' }}>
          <CardContent sx={{ color: theme.palette.primary.main, minHeight:'300px' }}>
            <Typography variant="h5" gutterBottom>
              {id}. {title}
            </Typography>
            <Typography variant="body1">
              {description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default SupportStickerItem;
