import React, { Dispatch, SetStateAction } from 'react';
import { Typography, CardContent, CardActions, Button, CardMedia, Card, Box, useTheme } from '@mui/material';
import {EventType} from "../../types/types"

interface EventsCardItemProps {
  eventData: EventType,
  setEventId: Dispatch<SetStateAction<Number>>,
  transformDateAndAdress: (eventData:EventType) => {address:String, date:string},
  scrollToSection: () => void
}

const EventsCardItem: React.FC<EventsCardItemProps> = ({eventData, setEventId, transformDateAndAdress, scrollToSection}) => {
  const theme = useTheme()
  const handleClick = () => {
    setEventId(eventData.id)
    scrollToSection()
  }
  const transormedData = transformDateAndAdress(eventData)
  return (
    <>
      <Box sx={{ maxWidth: '350px', m:'25px 0'}}>
        <Card>
          <CardContent sx={{ bgcolor: '#92C48A',color:theme.palette.primary.main, ':last-child': { pb: '16px' } }}>
            <CardMedia
              sx={{ mb: '10px' }}
              component="img"
              height="194"
              image="img/event-item1.png"
              alt="event"
            />
            <Typography variant="h5" component="div">
              {eventData.name}
            </Typography>
            <Typography sx={{ mb: 1.5, fontSize: '14px' }} color="text.secondary">
              {transormedData.address}
            </Typography>
            <Typography variant="body2" sx={{ mb: '15px' }}>
              {eventData.shortDescription}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <CardActions sx={{ p: 0 }}>
                <Button onClick={handleClick} variant="contained" size="small">Więcej</Button>
              </CardActions>
              <Typography sx={{ fontSize: '12px', fontWeight:'600' }} color="text.secondary">
                {transormedData.date}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default EventsCardItem;
