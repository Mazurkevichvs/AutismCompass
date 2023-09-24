import React from 'react';
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
  const fact = FACTS.map((accordion, index) => <AccordionItem key={index} data={accordion}/>);
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  return (
    <Container maxWidth="lg" sx={{ mb: '50px' }}>
      <Box my={4}>
        <Typography variant="h4" align="left" gutterBottom color='#00454C'>
          Fakty i mity?
        </Typography>
        <Typography variant="body1" align="left" mb={'50px'} paragraph color= '#00454C'>
          Lorem ipsum dolor sit amet consectetur. Est orci amet gravida netus molestie sagittis
          fermentum. Sed nullam nullam quis est orci. Maecenas lectus pretium egestas auctor
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: isSmallScreen ? 'column' : 'row' }}>
          <Box sx={{ width: isSmallScreen ? '100%' : '50%' }}>{fact}</Box>
          <img src="/img/FactsAndMyths.png" alt="family" />
        </Box>
      </Box>
    </Container>
  );
};

export default FactsAndMyths;
