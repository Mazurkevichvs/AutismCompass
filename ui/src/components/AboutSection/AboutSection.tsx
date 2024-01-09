import React, { useState, RefObject } from 'react';
import { Box, Typography, Container, useTheme } from '@mui/material';
import { AboutCard } from '..';
import {DESCRIPTION} from '../../consts/consts'
import useBreakpoints from '../../hooks/useBreakpoints';

interface AbourSectionProp {
  homeRef: RefObject<HTMLElement> 
}

const AboutSection: React.FC<AbourSectionProp> = ({homeRef}) => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);
  const {smallerThanMedium, isLargeScreen, isExtraSmallScreen} = useBreakpoints()
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
    <section ref={homeRef} style={{ height: expandedCards.length > 0 || !isLargeScreen ? '100%' : '100vh' }}>
      <Container maxWidth="lg" sx={{my: isExtraSmallScreen ? '10px' : !isLargeScreen ? '20px' : ''}}>
        <Box
          sx={{
            backgroundColor: theme.palette.background.default,
            color: theme.palette.primary.main,
          }}>
          <Typography variant="h4" align="left" gutterBottom mb={isExtraSmallScreen ? '15px' : '30px'} mt={expandedCards.length > 0 ? '30px' : '0px'}>
            Czym jest autyzm ?
          </Typography>
          <Typography variant="h6" align="left" gutterBottom mb={isExtraSmallScreen ? '15px' :'20px'}>
            Autyzm to rodzaj zaburzenia rozwojowego, które wpływa na to, w jaki sposób ludzie myślą,
            uczą się i komunikują.
          </Typography>
          <Typography mb={isExtraSmallScreen ? '15px' : '40px'} variant="body1" align="left" gutterBottom>
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
          <Typography mb={isExtraSmallScreen ? '30px' :'60px'} variant="body1" align="left" gutterBottom>
            Pozwól nam razem zanurzyć się w świecie autyzmu, by lepiej zrozumieć i szanować
            niepowtarzalność każdej jednostki na tym fascynującym spektrum.
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: smallerThanMedium ? 'column' : 'row',
            mb: expandedCards.length > 0 ? '30px' : '0px'
          }}>
            {DESCRIPTION.map((el) => <AboutCard
            key={el.id}
            isOpened={expandedCards.includes(el.id)}
            onCardClick={() => handleCardClick(el.id)}
            description={el}
          />)}          
        </Box>
      </Container>
    </section>
  );
};

export default AboutSection;
