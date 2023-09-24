import React from 'react';
import { Container, Box, TextField, TextareaAutosize, Button, Typography,useMediaQuery, Theme } from '@mui/material';

const SupportForm: React.FC = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  return (
    <Box sx={{ backgroundColor: '#D7BBF5', py: 10 }}>
      <Container
        maxWidth="lg"
        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: isSmallScreen ? 'column' : 'row', }}>
        <form className="support__form">
          <Typography variant="h4" gutterBottom>
            Forma dla pomocy
          </Typography>
          <TextField
            fullWidth
            label="Imię"
            variant="filled"
            margin="normal"
            required
            sx={{ bgcolor: '#A78295' }}
          />
          <TextField
            fullWidth
            label="Nazwisko"
            variant="filled"
            margin="normal"
            required
            sx={{ bgcolor: '#A78295' }}
          />
          <TextField
            fullWidth
            label="Email"
            variant="filled"
            margin="normal"
            required
            sx={{ bgcolor: '#A78295' }}
          />
          <TextareaAutosize
            minRows={4}
            placeholder="Wiadomość"
            required
            style={{
              width: '100%',
              padding: '8px',
              marginTop: '16px',
              backgroundColor: '#A78295',
            }}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '16px', width: '150px' }}>
            Get Support
          </Button>
        </form>
        <Box sx={{ position: 'relative', zIndex: 1 ,order: isSmallScreen ? '-1' : '1' , px: '60px', display: isSmallScreen ? 'none' : 'block'}}>
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
      </Container>
    </Box>
  );
};

export default SupportForm;
