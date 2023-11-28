import React from 'react';
import { Typography, CardContent, CardActions, Button, CardMedia, Card, Box } from '@mui/material';

const EventsCardItem: React.FC = () => {
  return (
    <>
      <Box>
        <Card>
          <CardContent>
            <CardMedia component="img" height="194" image="img/event-item1.png" alt="Paella dish" />
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              asdasdad
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};

export default EventsCardItem;
