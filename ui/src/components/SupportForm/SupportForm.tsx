import React, { useState, FormEvent, SyntheticEvent } from 'react';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  useMediaQuery,
  Theme,
  useTheme,
  CircularProgress,
  Snackbar,
  Alert,
} from '@mui/material';
import { FormDataObject } from '../../types/types';

const SupportForm: React.FC = () => {
  const [supportFromData, setSupportFromData] = useState<FormDataObject>({
    email: '',
    name: '',
    surname: '',
  });
  const [errors, setErrors] = useState({ email: false, name: false, surname: false });
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const theme = useTheme();

  const handleClose = (_event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const formValidation = () => {
    if (!supportFromData.email || !/^\S+@\S+\.\S+$/.test(supportFromData.email))
      setErrors({ ...errors, email: true });
    if (!supportFromData.name || typeof supportFromData.name !== 'string')
      setErrors({ ...errors, name: true });
    if (!supportFromData.surname || typeof supportFromData.surname !== 'string')
      setErrors({ ...errors, surname: true });

    return !errors.email && !errors.name && !errors.surname ? true : false;
  };

  const submitSupportFrom = async (event: FormEvent) => {
    event.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      try {
        setIsLoading(true);
        const response = await fetch(
          `http://localhost:5154/api/support`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(supportFromData),
          },
        );
        console.log(response)
        if (response.ok) {
          setOpen(true);
          setSupportFromData({
            email: '',
            name: '',
            surname: '',
          });
        } else {
          console.error('Registration failed');
        }
      } catch (error) {
        console.error('Error during registration', error);
      } finally {
        setIsLoading(false);
        console.log(errors)
      }
    } else setOpen(true);
  };
  return (
    <section>
      <Box
        sx={{
          backgroundColor: '#D7BBF5',
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pb: '100px',
        }}>
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: isSmallScreen ? 'column' : 'row',
            color: theme.palette.primary.main,
          }}>
          <form onSubmit={submitSupportFrom} className="support__form">
            <Typography variant="h4" gutterBottom>
              Forma dla pomocy
            </Typography>
            <TextField
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setSupportFromData({
                ...supportFromData,
                name: event.target.value,
              });
            }}
              fullWidth
              label="Imię"
              variant="filled"
              margin="normal"
              required
              sx={{ bgcolor: '#A78295' }}
            />
            <TextField
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setSupportFromData({
                ...supportFromData,
                surname: event.target.value,
              });
            }}
              fullWidth
              label="Nazwisko"
              variant="filled"
              margin="normal"
              required
              sx={{ bgcolor: '#A78295' }}
            />
            <TextField
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setSupportFromData({
                ...supportFromData,
                email: event.target.value,
              });
            }}
              fullWidth
              label="Email"
              variant="filled"
              margin="normal"
              required
              sx={{ bgcolor: '#A78295' }}
            />
            {isLoading ? (
                  <CircularProgress />
                ) : (<Button
              variant="contained"
              color="primary"
              fullWidth
              type='submit'
              style={{ marginTop: '16px', width: '150px' }}>
              Wyślij
            </Button>)}
          </form>
          <Box
            sx={{
              position: 'relative',
              zIndex: 1,
              order: isSmallScreen ? '-1' : '1',
              px: '60px',
              display: isSmallScreen ? 'none' : 'block',
            }}>
            <Box
              sx={{
                position: 'absolute',
                bottom: -40,
                left: 0,
                width: '480px',
                height: '50%',
                backgroundColor: '#E7CEA6',
                zIndex: -1,
              }}></Box>
            <img
              src="/img/child-autism.png"
              alt="Support"
              style={{
                maxWidth: '100%',
                backgroundColor: '#A78295',
                zIndex: 2,
                border: '1px solid #47A992',
              }}
            />
          </Box>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={Object.values(errors).includes(true) ? 'error' : 'success'} sx={{ width: '100%' }}>
              {Object.values(errors).includes(true) ? 'Mail nie został wysłany' : 'Mail został wysłany!'}
            </Alert>
          </Snackbar>
        </Container>
      </Box>
    </section>
  );
};

export default SupportForm;
