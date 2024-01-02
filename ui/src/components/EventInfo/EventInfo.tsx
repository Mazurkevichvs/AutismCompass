import React, { RefObject, useState, SyntheticEvent, FormEvent } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  useTheme,
  CircularProgress,
  Snackbar,
  Alert,
} from '@mui/material';
import { EventType, FormDataObject } from '../../types/types';

interface EventInfoProps {
  transformDateAndAdress: (eventData: EventType) => { address: String; date: string };
  clickedEvent: EventType;
  eventInfoRef: RefObject<HTMLElement>;
}

const EventInfo: React.FC<EventInfoProps> = ({
  transformDateAndAdress,
  clickedEvent,
  eventInfoRef,
}) => {
  const [open, setOpen] = useState(false);
  const [eventRegistrationData, setEventRegistrationData] = useState<FormDataObject>({
    email: '',
    name: '',
    surname: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    email: false,
    name: false,
    surname: false,
    submit: false,
  });
  const theme = useTheme();
  const mb = { mb: '30px' };
  const transformedData = transformDateAndAdress(clickedEvent);

  const handleClose = (_event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const formValidation = () => {
    let isValid = true;
    if (!eventRegistrationData.email || !/^\S+@\S+\.\S+$/.test(eventRegistrationData.email)) {
      setErrors((prev) => ({ ...prev, email: true }));
      isValid = false;
    } else setErrors((prev) => ({ ...prev, email: false }));
    if (
      !eventRegistrationData.name ||
      !eventRegistrationData.name.trim() ||
      /\d/.test(eventRegistrationData.name)
    ) {
      setErrors((prev) => ({ ...prev, name: true }));
      isValid = false;
    } else setErrors((prev) => ({ ...prev, name: false }));
    if (
      !eventRegistrationData.surname ||
      !eventRegistrationData.surname.trim() ||
      /\d/.test(eventRegistrationData.surname)
    ) {
      setErrors((prev) => ({ ...prev, surname: true }));
      isValid = false;
    } else setErrors((prev) => ({ ...prev, surname: false }));
    return isValid;
  };

  const submitEventRegistration = async (event: FormEvent) => {
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
        if (response.ok) {
          setEventRegistrationData({
            email: '',
            name: '',
            surname: '',
          });
          setErrors((prev) => ({ ...prev, submit: false }));
        }
      } catch (error) {
        console.error('Błąd rejestracji', error);
        setErrors((prev) => ({ ...prev, submit: true }));
      } finally {
        setIsLoading(false);
        setOpen(true);
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
                src={`img/${clickedEvent.imgLink}`}
                alt="Event"
                style={{ width: '40%', borderRadius: '25px', height: '350px' }}
              />
            </Box>
            <Box sx={{ mt: '25px', width: '50%' }}>
              <Typography variant="h6" gutterBottom>
                Zarejestruj się na wydarzenie:
              </Typography>
              <form
                onSubmit={submitEventRegistration}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box>
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
                    error={errors.email && true}
                    helperText={errors.email && 'Wprowadź poprawny email!'}
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
                    error={errors.name && true}
                    helperText={errors.name && 'Wprowadź poprawne imię!'}
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
                    error={errors.surname && true}
                    helperText={errors.surname && 'Wprowadź poprawne nazwisko!'}
                  />
                </Box>
                {isLoading ? (
                  <CircularProgress />
                ) : (
                  <Button variant="contained" color="primary" fullWidth type="submit">
                    Zarejestruj się
                  </Button>
                )}
              </form>
            </Box>
          </Box>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity={Object.values(errors).includes(true) ? 'error' : 'success'}
              sx={{ width: '100%' }}>
              {Object.values(errors).includes(true)
                ? 'Rejestracja się nie udała'
                : 'Dziękujemy za rejestracje!'}
            </Alert>
          </Snackbar>
        </Container>
      </section>
    </>
  );
};

export default EventInfo;
