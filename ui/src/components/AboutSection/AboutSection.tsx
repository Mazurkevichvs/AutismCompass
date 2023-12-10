import React from 'react';
import { Box, Typography, useMediaQuery, Theme, Container, useTheme } from '@mui/material';
import { AboutCard } from '..';

const DESCRIPTION = {
  first:'Osoby, które otrzymały diagnozę autyzmu w dzieciństwie, nadal pozostają w spektrum autyzmu w wieku dorosłym. Część dorosłych z autyzmem prowadzi niezależne życie, pracuje zawodowo i zakłada własne rodziny. Osoby te wypracowują własne strategie radzenia sobie z codziennymi...',
  second: 'Diagnoza autyzmu opiera się na obserwacji zachowania jednostki i wymaga kilku spotkań z różnymi specjalistami, takimi jak psychiatra, psycholog, pedagog specjalny czy logopeda. W trakcie tych spotkań diagnostycy przeprowadzają wywiad, badają wczesny rozwój oraz pytają o trudności ...' 
}

const AboutSection: React.FC = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const theme = useTheme();
  
  return (
    <section>
      <Container
        maxWidth="lg">
        <Box
          sx={{
            backgroundColor: theme.palette.background.default,
            color: theme.palette.primary.main,
          }}>
          <Typography variant="h4" align="left" gutterBottom mb={'30px'}>
          Czym jest autyzm ?
          </Typography>
          <Typography variant="h6" align="left" gutterBottom mb={'20px'}>
          Autyzm to rodzaj zaburzenia rozwojowego, które wpływa na to, w jaki sposób ludzie myślą, uczą się i komunikują.
          </Typography>
          <Typography mb={'40px'} variant="body1" align="left" gutterBottom>
          Osoby z autyzmem mogą mieć trudności w nawiązywaniu relacji społecznych, zrozumieniu emocji innych osób oraz w komunikacji werbalnej i niewerbalnej. To jest swoiste spektrum, co oznacza, że objawy autyzmu mogą się bardzo różnić od łagodnych do bardziej intensywnych. Każda osoba z autyzmem jest wyjątkowa, a wspieranie ich różnorodnych potrzeb jest kluczowe dla lepszego zrozumienia i akceptacji.. Poprzez tę stronę pragniemy dostarczyć rzetelnej wiedzy na temat autyzmu, rozbijając mit i promując pełne zrozumienie. Chcemy stworzyć przestrzeń, gdzie społeczeństwo może uczyć się o różnorodności autyzmu, wspierać jednostki z tym zaburzeniem oraz pracować nad tworzeniem bardziej inkluzywnej i akceptującej przestrzeni dla wszystkich.
          </Typography>
          <Typography mb={'60px'} variant="body1" align="left" gutterBottom>
          Pozwól nam razem zanurzyć się w świecie autyzmu, by lepiej zrozumieć i szanować niepowtarzalność każdej jednostki na tym fascynującym spektrum.
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: isSmallScreen ? 'column' : 'row',
          }}>
          <AboutCard isSmallScreen={isSmallScreen} title={'Autyzm u dorosłych'} description={DESCRIPTION.first}/>
          <AboutCard isSmallScreen={isSmallScreen} title={'Diagnoza autyzmu'} description={DESCRIPTION.second} />
        </Box>
      </Container>
    </section>
  );
};

export default AboutSection;
