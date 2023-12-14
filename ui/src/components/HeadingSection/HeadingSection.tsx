import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface HeadingSectionProps {
    bgImage: String,
    title: String,
}

const HeadingSection: React.FC<HeadingSectionProps> = ({bgImage, title}) => {
  return (
    <>
      <section
        style={{ backgroundImage: `url('/img/${bgImage}.png')`, backgroundSize: 'cover' }}>
        <Container maxWidth="lg">
          <Box sx={{ color: '#fff' }}>
            <Typography variant={'h2'} sx={{ mt: 5, width: '50%' }}>
              {title}
            </Typography>
            <Box sx={{ display: 'flex',width:'110px', alignItems: 'center', cursor:'pointer',transition: 'transform 0.5s ease-in-out', ':hover': {color: 'rgb(117, 188, 105)', transform: 'translateX(20px)' } }}>
              <Typography variant="body1">Więcej</Typography>
              <ChevronRightIcon sx={{ width: '20px', height: '20px' }} />
            </Box>
          </Box>
        </Container>
      </section>
    </>
  );
};

export default HeadingSection;
