import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
} from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#AEDBF9',
        padding: '20px 0',
        color: '#00454C',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Container maxWidth="xl" sx={{display: 'flex'}}>
        <Box display="flex" alignItems="center">
          <img
            src="img/main_icon.png"
            alt="Autism Compass"
            height="40px"
            style={{ marginRight: '10px' }}
          />
          <Typography variant="h6">Autism Compass</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Link href="#" color="inherit" sx={{ marginRight: '10px' }}>
            <FacebookIcon />
          </Link>
          <Link href="#" color="inherit" sx={{ marginRight: '10px' }}>
            <InstagramIcon />
          </Link>
          <Link href="#" color="inherit">
            <TwitterIcon />
          </Link>
        </Box>
      </Container>
      <Typography variant="body2" >
        © 2023 Autysci mówią
      </Typography>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="flex-end">
          <Link href="#" color="inherit" sx={{ marginRight: '10px' }}>
            Czym jest autyzm?
          </Link>
          <Link href="#" color="inherit" sx={{ marginRight: '10px' }}>
            Wsparcie dla osób z autyzmem
          </Link>
          <Link href="#" color="inherit" sx={{ marginRight: '10px' }}>
            Test diagnozujący
          </Link>
          <Link href="#" color="inherit" sx={{ marginRight: '10px' }}>
            Wydarzenia
          </Link>
          <Link href="#" color="inherit" sx={{ marginRight: '10px' }}>
            Gry
          </Link>
          <Link href="#" color="inherit">
            O nas
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
