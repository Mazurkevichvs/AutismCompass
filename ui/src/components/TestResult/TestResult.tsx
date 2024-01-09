import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  useTheme,
  Alert,
  Snackbar,
  CircularProgress,
} from '@mui/material';
import React, { FormEvent, SyntheticEvent, useState } from 'react';
import { UserResult } from '../../types/types';

interface TestResultProps {
  userResult: UserResult;
  quizName?: string;
}

const TestResult: React.FC<TestResultProps> = ({ userResult, quizName }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const handleClose = (_event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const submitSendingResults = async (event: FormEvent) => {
    event.preventDefault();
    const result = {
      userQuizResultId: userResult.id,
      email,
      resultTitle: userResult.resultTitle,
      description: userResult.details,
      userResult: userResult.score,
      quizName,
    };
    event.preventDefault();
    if (/^\S+@\S+\.\S+$/.test(email)) {
      try {
        setIsLoading(true);
        const response = await fetch(`http://localhost:5154/api/quiz/send-answer`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(result),
        });
        console.log(response)
        if (response.ok) {
          setEmail('');
          setError(false);
        }
      } catch (error) {
        console.error('Błąd wysyłki emaila', error);
        setError(true);
      } finally {
        setIsLoading(false);
        setOpen(true);
      }
    } else setError(true);
  };

  return (
    <>
      <section>
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: theme.palette.primary.main,
          }}>
          <Typography variant="h4" gutterBottom mb={'20px'}>
            Wynik: {userResult.resultTitle}
          </Typography>
          <div dangerouslySetInnerHTML={{ __html: userResult.details }} />
          <Box
            sx={{ p: '25px', borderRadius: '15px', bgcolor: '#E6F1F8', width: '50%', mt: '50px' }}>
            <Typography variant="h6" gutterBottom mb={'20px'}>
              Podaj adres email na który wyślemy wyniki:
            </Typography>
            <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box sx={{ width: '100%' }}>
                <TextField
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(event.target.value);
                  }}
                  value={email}
                  sx={{ mb: '20px' }}
                  label="Email"
                  fullWidth
                  variant="filled"
                  type="email"
                  required
                  error={error}
                  helperText={error && 'Wprowadź poprawnego maila!'}
                />
              </Box>
              {isLoading ? (
                <CircularProgress />
              ) : (
                <Button
                onClick={submitSendingResults}
                  sx={{ width: '50%' }}
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit">
                  Zatwierdź
                </Button>
              )}
            </form>
          </Box>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity={error ? 'error' : 'success'}
              sx={{ width: '100%' }}>
              {error ? 'Mail nie został wysłany' : 'Mail został wysłany!'}
            </Alert>
          </Snackbar>
        </Container>
      </section>
    </>
  );
};

export default TestResult;
