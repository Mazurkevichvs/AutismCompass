import React from 'react';
import {
  Box,
  Container,
  Typography,
  Toolbar,
  useMediaQuery,
  Theme,
} from '@mui/material';
import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { NavigationsProps } from '../../types/types';
import { NavItem } from '..';

const Footer: React.FC<NavigationsProps> = ({ navigations }) => {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const navigationItem = navigations.map((page, i) => <NavItem key={i} page={page} isFooter={true}/>);
  return (
    <footer className='footer'>
      <Container
        maxWidth="xl"
        sx={{
          backgroundColor: '#AEDBF9',
          color: '#00454C',
        }}>
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: isSmallScreen ? 'column' : 'row',
          }}>
            <Link to={'/'}>
          <Box display="flex" alignItems="center" mr={'10px'}>
            <img
              src="img/main_icon.png"
              alt="Autism Compass"
              height="80px"
              style={{ marginRight: '20px' }}
            />
            <Typography variant="h6" maxWidth="100px" fontFamily="Jua" fontSize={26}>
              Autism Compass
            </Typography>
          </Box>
          </Link>
          <Box display="flex" alignItems="center" mr={'10px'}>
            <Link to="/" color="inherit" style={{ marginRight: '10px' }}>
              <FacebookIcon />
            </Link>
            <Link to="/" color="inherit" style={{ marginRight: '10px' }}>
              <InstagramIcon />
            </Link>
            <Link to="/" color="inherit">
              <TwitterIcon />
            </Link>
          </Box>
          <Typography variant="body2" sx={{ order: isSmallScreen ? '1' : '' }}>
            © 2023 Autysci mówią
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: isSmallScreen ? 'column' : 'row',
              alignItems: 'center',
              height: '80px'
            }}>
            {navigationItem}
          </Box>
        </Toolbar>
      </Container>
    </footer>
  );
};

export default Footer;