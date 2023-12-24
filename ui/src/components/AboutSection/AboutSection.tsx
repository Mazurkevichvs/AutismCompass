import React, { useState, RefObject } from 'react';
import { Box, Typography, useMediaQuery, Theme, Container, useTheme } from '@mui/material';
import { AboutCard } from '..';
import {DESCRIPTION} from '../../consts/consts'

interface AbourSectionProp {
  homeRef: RefObject<HTMLElement> 
}

const AboutSection: React.FC<AbourSectionProp> = ({homeRef}) => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const theme = useTheme();

  const handleCardClick = (cardId: number) => {
    setExpandedCards((prevExpandedCards) => {
      if (prevExpandedCards.includes(cardId)) {
        return prevExpandedCards.filter((id) => id !== cardId);
      } else {
        return [...prevExpandedCards, cardId];
      }
    });
  };

  return (
    <section ref={homeRef} style={{ height: expandedCards.length > 0 ? '100%' : '100vh' }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            backgroundColor: theme.palette.background.default,
            color: theme.palette.primary.main,
          }}>
          <Typography variant="h4" align="left" gutterBottom mb={'30px'} mt={expandedCards.length > 0 ? '30px' : '0px'}>
            Czym jest autyzm ?
          </Typography>
          <Typography variant="h6" align="left" gutterBottom mb={'20px'}>
            Autyzm to rodzaj zaburzenia rozwojowego, które wpływa na to, w jaki sposób ludzie myślą,
            uczą się i komunikują.
          </Typography>
          <Typography mb={'40px'} variant="body1" align="left" gutterBottom>
            Osoby z autyzmem mogą mieć trudności w nawiązywaniu relacji społecznych, zrozumieniu
            emocji innych osób oraz w komunikacji werbalnej i niewerbalnej. To jest swoiste
            spektrum, co oznacza, że objawy autyzmu mogą się bardzo różnić od łagodnych do bardziej
            intensywnych. Każda osoba z autyzmem jest wyjątkowa, a wspieranie ich różnorodnych
            potrzeb jest kluczowe dla lepszego zrozumienia i akceptacji.. Poprzez tę stronę
            pragniemy dostarczyć rzetelnej wiedzy na temat autyzmu, rozbijając mit i promując pełne
            zrozumienie. Chcemy stworzyć przestrzeń, gdzie społeczeństwo może uczyć się o
            różnorodności autyzmu, wspierać jednostki z tym zaburzeniem oraz pracować nad tworzeniem
            bardziej inkluzywnej i akceptującej przestrzeni dla wszystkich.
          </Typography>
          <Typography mb={'60px'} variant="body1" align="left" gutterBottom>
            Pozwól nam razem zanurzyć się w świecie autyzmu, by lepiej zrozumieć i szanować
            niepowtarzalność każdej jednostki na tym fascynującym spektrum.
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: isSmallScreen ? 'column' : 'row',
            mb: expandedCards.length > 0 ? '30px' : '0px'
          }}>
            {DESCRIPTION.map((el) => <AboutCard
            key={el.id}
            isOpened={expandedCards.includes(el.id)}
            onCardClick={() => handleCardClick(el.id)}
            isSmallScreen={isSmallScreen}
            description={el}
          />)}          
        </Box>
      </Container>
    </section>
  );
};

export default AboutSection;
