import React, { RefObject } from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';

interface TestAboutProps {
  eventSectionRef: RefObject<HTMLElement>
}

const TestAbout: React.FC<TestAboutProps> = ({eventSectionRef}) => {
  const theme = useTheme();
  return (
    <>
      <section ref={eventSectionRef} style={{ height: '100%' }}>
        <Container maxWidth="lg" sx={{ py: '50px', color: theme.palette.primary.main }}>
          <Typography variant="h4" gutterBottom mb={'20px'}>
            Jak to działa?
          </Typography>
          <Typography variant="h6" align="left" gutterBottom mb={'20px'}>
          Poniżej znajdziesz 15 pytań dotyczących różnych aspektów codziennego życia.
          </Typography>
          <Typography mb={'30px'} variant="body1" align="left" gutterBottom>
          Odpowiedz na każde z pytań, wskazując, w jakim stopniu dane zachowanie lub doświadczenie dotyczy Ciebie. Wybierz jedną z pięciu opcji: nigdy, bardzo rzadko, czasami, często lub bardzo często. Odpowiadając, staraj się być jak najbardziej szczery, aby uzyskać jak najdokładniejszy obraz. Jednakże, jeśli masz poważne obawy dotyczące spektrum autyzmu lub innych kwestii zdrowia psychicznego, zalecamy skonsultowanie się z profesjonalnym specjalistą. 
          </Typography>
          <Typography mb={'30px'} variant="body1" align="left" gutterBottom>
          Pamiętaj, że wynik tego testu nie jest diagnozą, a jedynie punktem wyjścia do dalszych rozważań. Teraz, gdy masz pełniejszy obraz, rozpocznijmy test.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              p: '25px',
              bgcolor: '#FFDFB9',
              color: '#FF8A00',
              borderRadius: '25px',
            }}>
            <img src="img/info-circle.svg" alt="info" />
            <Typography variant="body1" align="left" sx={{ ml: '20px' }}>
            Ten test został stworzony w celu dostarczenia ogólnej refleksji nad pewnymi aspektami zachowań i doświadczeń, które mogą występować w kontekście spektrum autyzmu. Prosimy, pamiętaj, że test ten nie jest profesjonalnym narzędziem diagnostycznym i nie zastępuje pełnowartościowej oceny przeprowadzonej przez specjalistę. Jest to jedynie narzędzie samooceny, mające na celu zachęcenie do refleksji nad pewnymi obszarami funkcjonowania.
            </Typography>
          </Box>
        </Container>
      </section>
    </>
  );
};

export default TestAbout;
