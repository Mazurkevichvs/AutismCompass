import React, { LegacyRef, useState } from 'react';
import { Container, Typography, TextField, Button, Box, useTheme } from '@mui/material';
import { EventType } from '../../types/types';

interface EventInfoProps {
  transformDateAndAdress: (eventData: EventType) => { address: String; date: string };
  clickedEvent: EventType;
  eventInfoRef: LegacyRef<HTMLElement>;
}
interface EventRegistrationObject {
  email: string;
  name: string;
  surname: string;
}

const EventInfo: React.FC<EventInfoProps> = ({
  transformDateAndAdress,
  clickedEvent,
  eventInfoRef,
}) => {
  const [eventRegistrationData, setEventRegistrationData] = useState<EventRegistrationObject>({
    email: '',
    name: '',
    surname: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({ email: false, name: false, surname: false });
  const theme = useTheme();
  const mb = { mb: '30px' };
  const transformedData = transformDateAndAdress(clickedEvent);

  const formValidation = () => {
    if (!eventRegistrationData.email || !/^\S+@\S+\.\S+$/.test(eventRegistrationData.email))
      setErrors({ ...errors, email: true });
    if (!eventRegistrationData.name || typeof eventRegistrationData.name !== 'string')
      setErrors({ ...errors, name: true });
    if (!eventRegistrationData.surname || typeof eventRegistrationData.surname !== 'string')
      setErrors({ ...errors, surname: true });

    return !errors.email && !errors.name && !errors.surname ? true : false;
  };

  const submitEventRegistration = async (event: React.FormEvent) => {
    event.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      try {
        setIsLoading(true);
        const response = await fetch(
          `http://localhost:5154/api/events/subscribe-to-gathering?gatheringId=${clickedEvent.id}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(eventRegistrationData),
          },
        );
        console.log(response);

        if (response.ok) {
          console.log('Registration successful');
        } else {
          console.error('Registration failed');
        }
      } catch (error) {
        console.error('Error during registration', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <section ref={eventInfoRef} style={{ height: '100%', minHeight: '100vh' }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              p: '55px',
              color: theme.palette.primary.main,
              borderRadius: '25px',
              bgcolor: '#E6F1F8',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              my: '20px',
            }}>
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
                style={{ width: '40%', borderRadius: '25px', height: '350px' }}
              />
            </Box>
            <Box sx={{ mt: '25px', width: '50%' }}>
              <Typography variant="h6" gutterBottom>
                Zarejestruj się na wydarzenie:
              </Typography>
              <form onSubmit={submitEventRegistration}>
                <Box className="form-fields">
                  <TextField
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setEventRegistrationData({
                        ...eventRegistrationData,
                        email: event.target.value,
                      });
                    }}
                    sx={mb}
                    label="Email"
                    variant="filled"
                    fullWidth
                    type="email"
                    value={eventRegistrationData.email}
                    required
                  />
                  <TextField
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setEventRegistrationData({
                        ...eventRegistrationData,
                        name: event.target.value,
                      });
                    }}
                    sx={mb}
                    label="Imię"
                    variant="filled"
                    fullWidth
                    value={eventRegistrationData.name}
                    required
                  />
                  <TextField
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setEventRegistrationData({
                        ...eventRegistrationData,
                        surname: event.target.value,
                      });
                    }}
                    sx={mb}
                    label="Nazwisko"
                    variant="filled"
                    fullWidth
                    value={eventRegistrationData.surname}
                    required
                  />
                </Box>
                <Button variant="contained" color="primary" fullWidth type="submit">
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
