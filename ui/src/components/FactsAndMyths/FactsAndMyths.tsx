import React, {useState} from 'react';
import { Box, Container, Typography } from '@mui/material';
import { AccordionItem } from '..';
import { FACTS } from '../../consts/consts';
import useBreakpoints from '../../hooks/useBreakpoints';


const FactsAndMyths: React.FC = () => {
  const [openedAccordion, setOpenedAccordion] = useState<number | null>(null);
  const fact = FACTS.map((accordion, index) => <AccordionItem key={index} data={accordion} isOpen={index === openedAccordion} onToggle={() => onToggle(index)}/>);
  const {smallerThanMedium, isExtraSmallScreen} = useBreakpoints()
  const onToggle = (index:number) => {
    setOpenedAccordion(index === openedAccordion ? null : index);
  }

  return (
    <section style={{height: openedAccordion !== null || smallerThanMedium ? '100%' : '100vh'}}>
    <Container maxWidth="lg" sx={{my: smallerThanMedium ? '20px' : '0'}} >
      <Box >
        <Typography variant="h4" align="left" gutterBottom sx={{mt: openedAccordion !== null ? '30px' : '0px', color:'#00454C' , mb: isExtraSmallScreen ? '15px' : '50px'}}>
          Fakty i mity?
        </Typography>
        <Typography variant="body1" align="left" mb={isExtraSmallScreen ? '25px' : '50px'} paragraph color= '#00454C'>
        Wokół autyzmu powstało wiele stereotypów,, a społeczeństwo jest nieświadome tego jak często powielają mity na temat autyzmu. Oto kilka wybranych faktów i mitów na temat spektrum: 
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: smallerThanMedium ? 'column-reverse' : 'row', mb: openedAccordion !== null ? '30px' : '0px' }}>
          <Box sx={{ width: smallerThanMedium ? '100%' : '50%' }}>
            {fact}
            </Box>
          <img src="/img/FactsAndMyths.png" alt="family" className='facts__img'/>
        </Box>
      </Box>
    </Container>
    </section>
  );
};

export default FactsAndMyths;
