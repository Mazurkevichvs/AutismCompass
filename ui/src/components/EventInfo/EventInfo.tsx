import React from 'react';
import { Container, Typography, TextField, Button, Box, useTheme } from '@mui/material';
import { EventType } from '../../types/types';

interface EventInfoProps {
  eventID: Number,
  events: EventType[]
}

const EventInfo: React.FC<EventInfoProps> = ({eventID, events}) => {
  const clickedEvent = events.find((el) => el.id === eventID)
  const theme = useTheme()
  const mb={mb:'30px'}
  return (
    <>
      {clickedEvent && <section>
        <Container maxWidth="lg">
          <Box sx={{ p: '55px',color:theme.palette.primary.main, borderRadius: '25px', bgcolor: '#E6F1F8', display:'flex', flexDirection:'column', alignItems:'center' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box sx={{ width: '55%' }}>
                <Typography variant="h4" gutterBottom>
                {clickedEvent.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                  Kiedy: {clickedEvent}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                  Gdzie: Gdansk, ul.Nieborowska 29/103
                </Typography>
                <Typography variant="body1" paragraph>
                  Autism Speaks Walk is powered by the love of people with autism and the parents,
                  grandparents, siblings, friends, relatives and providers who support them. Autism
                  Speaks Walk is powered by the love of people with autism and the parents,
                  grandparents, siblings, friends, relatives and providers who support them.
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
      </section>}
    </>
  );
};

export default EventInfo;
