import React from 'react';
import { Container, Box, Typography, useTheme } from '@mui/material';

const SupportAdvices: React.FC = () => {
  const theme = useTheme()
  return (
    <>
      <section>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', color:theme.palette.primary.main }}>
            <Box sx={{mr:'100px'}}>
              <img
                src="/img/support-kid1.png"
                alt="First Block"
                style={{ width: '450px', height: 'auto', borderRadius:'15px' }}
              />
            </Box>
            <Box>
              <Typography variant="h4" mb={2}>
              Dokąd udać się z dzieckiem z podejrzeniem zaburzeń ze spektrum autyzmu?
              </Typography>
              <Typography variant="body1">
              Najbardziej korzystną sytuacją w przypadku podejrzeń dotyczących zaburzeń ze spektrum autyzmu jest skierowanie dziecka do zespołu diagnostycznego, który obejmuje specjalistów z różnych dziedzin. Taki zespół może składać się, na przykład, z psychiatry dziecięcego, psychologa, pedagoga czy logopedy. Rodzice mają możliwość skierowania się z dzieckiem do poradni psychologiczno-pedagogicznej, gdzie również istnieje kompetencja do diagnozowania tego rodzaju zaburzeń. Alternatywą jest również skorzystanie z usług placówek komercyjnych, które specjalizują się w diagnozowaniu zaburzeń ze spektrum autyzmu. 
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', my: 4, color:theme.palette.primary.main}}>
            <Box>
              <Typography variant="h4" mb={2}>
              Gdzie znaleźć wsparcie: Przewodnik dla rodziców dzieci z podejrzeniem zaburzeń ze spektrum autyzmu.
              </Typography>
              <Typography variant="body1">
              Diagnoza spektrum autyzmu (ASD) jest kompleksowym procesem, zwykle przeprowadzanym przez zespół specjalistów. Włącza to ocenę zachowań, zdolności komunikacyjnych i społecznych. Diagnostyka ASD może obejmować wywiady z opiekunami, obserwacje, testy psychologiczne i ewentualnie badania neurologiczne. Ważne jest, aby uwzględnić różnorodność objawów i indywidualny kontekst każdego pacjenta. Ostateczna diagnoza umożliwia lepsze zrozumienie potrzeb osoby z autyzmem i dostosowanie strategii terapeutycznych.

              </Typography>
            </Box>
            <Box sx={{ml:'100px'}}>
              <img
                src="/img/support-kid2.png"
                alt="Third Block"
                style={{ width: '450px', height: 'auto', borderRadius:'15px' }}
              />
            </Box>
          </Box>
        </Container>
      </section>
    </>
  );
};

export default SupportAdvices;
