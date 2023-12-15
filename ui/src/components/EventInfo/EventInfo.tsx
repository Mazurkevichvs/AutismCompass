import React, { LegacyRef } from 'react';
import { Container, Typography, TextField, Button, Box, useTheme } from '@mui/material';
import { EventType } from '../../types/types';

interface EventInfoProps {
  transformDateAndAdress: (eventData:EventType) => {address:String, date:string},
  clickedEvent:EventType;
  eventInfoRef: LegacyRef<HTMLElement>
}

const EventInfo: React.FC<EventInfoProps> = ({transformDateAndAdress, clickedEvent, eventInfoRef}) => {
  const theme = useTheme()
  const mb={mb:'30px'}
  const transformedData = transformDateAndAdress(clickedEvent)
  return (
    <>
      <section ref={eventInfoRef}>
        <Container maxWidth="lg">
          <Box sx={{ p: '55px',color:theme.palette.primary.main, borderRadius: '25px', bgcolor: '#E6F1F8', display:'flex', flexDirection:'column', alignItems:'center' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box sx={{ width: '55%' }}>
                <Typography variant="h4" gutterBottom>
                {clickedEvent.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                  Kiedy: {transformedData.date}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                  Gdzie: {transformedData.address}
                </Typography>
                <Typography variant="body1" paragraph>
                  {clickedEvent.description}
                </Typography>
              </Box>
              <img
                src="https://placekitten.com/400/300"
                alt="Event"
                style={{ width: '40%', borderRadius:'25px' }}
              />
            </Box>
            <Box sx={{mt:'25px', width:'50%'}}>
              <Typography variant="h6" gutterBottom>
                Zarejestruj się na wydarzenie:
              </Typography>
              <form>
                <Box className="form-fields">
                  <TextField sx={mb} label="Email" variant="filled" fullWidth type="email" required />
                  <TextField sx={mb} label="Imię" variant="filled" fullWidth required />
                  <TextField sx={mb} label="Nazwisko" variant="filled" fullWidth required />
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit">
                  Register
                </Button>
              </form>
            </Box>
          </Box>
        </Container>
      </section>
    </>
  );
};

export default EventInfo;
