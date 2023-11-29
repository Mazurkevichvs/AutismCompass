import React from 'react';
import { Typography, CardContent, CardActions, Button, CardMedia, Card, Box } from '@mui/material';

const EventsCardItem: React.FC = () => {
  return (
    <>
      <Box sx={{ maxWidth: '350px', m:'25px 0'}}>
        <Card>
          <CardContent sx={{ bgcolor: '#92C48A', ':last-child': { pb: '16px' } }}>
            <CardMedia
              sx={{ mb: '10px' }}
              component="img"
              height="194"
              image="img/event-item1.png"
              alt="event"
            />
            <Typography variant="h5" component="div">
              Nazwa
            </Typography>
            <Typography sx={{ mb: 1.5, fontSize: '14px' }} color="text.secondary">
              Gdansk, ul.Nieborowska 29/103
            </Typography>
            <Typography variant="body2" sx={{ mb: '15px' }}>
              Lorem ipsum dolor sit amet consectetur. Aliquet fringilla in bibendum lectus elementum
              pellentesque elit.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <CardActions sx={{ p: 0 }}>
                <Button variant="contained" size="small">Rejestracja</Button>
              </CardActions>
              <Typography sx={{ fontSize: '12px', fontWeight:'600' }} color="text.secondary">
                15/11/23 15:30
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default EventsCardItem;
