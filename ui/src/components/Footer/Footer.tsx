import React from 'react';
import {
  Box,
  Container,
  Typography,
  Toolbar
} from '@mui/material';
import { Link } from 'react-router-dom';
import { NavigationsProps } from '../../types/types';
import { NavItem } from '..';
import useBreakpoints from '../../hooks/useBreakpoints';

const Footer: React.FC<NavigationsProps> = ({ navigations }) => {
  const {smallerThanMedium, isExtraSmallScreen} = useBreakpoints()
  const navigationItem = navigations.map((page, i) => <NavItem key={i} page={page}/>);
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
            flexDirection: smallerThanMedium ? 'column' : 'row',
          }}>
            <Link to={'/'}>
          <Box sx={{display:"flex", alignItems:"center", mr:'10px'}} >
            <img
              src="img/main_icon.png"
              alt="Autism Compass"
              height= {isExtraSmallScreen ? '40px' : "80px"}
              style={{ marginRight: isExtraSmallScreen ? '10px' : '20px' }}
            />
            <Typography variant="h6" maxWidth="70px" fontFamily="Jua" fontSize={26}>
              Autism Compass
            </Typography>
          </Box>
          </Link>
          <Typography variant="body2" sx={{order: smallerThanMedium ?  '1' : '0',  mb: smallerThanMedium ? '15px' : '' }}>
            © 2023 Autism Compass
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: isExtraSmallScreen ? 'column' : 'row',
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
