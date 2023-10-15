import React, {useState} from 'react';
import { Box, Container, Typography, useMediaQuery,Theme } from '@mui/material';
import { AccordionItem } from '..';

const FACTS = [
  {
    title: 'Lorem ipsum dolor sit amet consectetur.',
    content:
      'Lorem ipsum dolor sit amet consectetur. Est orci amet gravida netus molestie sagittis fermentum. Sed nullam nullam quis est orci. Maecenas lectus pretium egestas auctor',
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur.',
    content:
      'Lorem ipsum dolor sit amet consectetur. Est orci amet gravida netus molestie sagittis fermentum. Sed nullam nullam quis est orci. Maecenas lectus pretium egestas auctor',
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur.',
    content:
      'Lorem ipsum dolor sit amet consectetur. Est orci amet gravida netus molestie sagittis fermentum. Sed nullam nullam quis est orci. Maecenas lectus pretium egestas auctor',
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur.',
    content:
      'Lorem ipsum dolor sit amet consectetur. Est orci amet gravida netus molestie sagittis fermentum. Sed nullam nullam quis est orci. Maecenas lectus pretium egestas auctor',
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur.',
    content:
      'Lorem ipsum dolor sit amet consectetur. Est orci amet gravida netus molestie sagittis fermentum. Sed nullam nullam quis est orci. Maecenas lectus pretium egestas auctor',
  },
];
const FactsAndMyths: React.FC = () => {
  const [openedAccordion, setOpenedAccordion] = useState<number | null>(null);
  const fact = FACTS.map((accordion, index) => <AccordionItem key={index} data={accordion} isOpen={index === openedAccordion} onToggle={() => onToggle(index)}/>);
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const onToggle = (index:number) => {
    setOpenedAccordion(index === openedAccordion ? null : index);
  }

  return (
    <section>
    <Container maxWidth="lg" >
      <Box >
        <Typography variant="h4" align="left" gutterBottom color='#00454C' mb={'50px'}>
          Fakty i mity?
        </Typography>
        <Typography variant="body1" align="left" mb={'50px'} paragraph color= '#00454C'>
          Lorem ipsum dolor sit amet consectetur. Est orci amet gravida netus molestie sagittis
          fermentum. Sed nullam nullam quis est orci. Maecenas lectus pretium egestas auctor
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: isSmallScreen ? 'column' : 'row' }}>
          <Box sx={{ width: isSmallScreen ? '100%' : '50%' }}>{fact}</Box>
          <img src="/img/FactsAndMyths.png" alt="family" className='facts__img'/>
        </Box>
      </Box>
    </Container>
    </section>
  );
};

export default FactsAndMyths;
