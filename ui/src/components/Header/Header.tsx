import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Container,
  IconButton,
} from '@mui/material';
import { NavItem, SideBarNav } from '..';
import { headerStyles } from '../../styles/theme';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { NavigationsProps } from '../../types/types';
import './Header.scss';
import { Link } from 'react-router-dom';
import useBreakpoints from '../../hooks/useBreakpoints';

const Header: React.FC<NavigationsProps> = ({ navigations }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {smallerThanMedium, isExtraSmallScreen} = useBreakpoints();
  const navigationItem = navigations.map((page, i) => <NavItem key={i} page={page} />);
  return (
    <AppBar position="absolute" style={headerStyles.appBar}>
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', padding: 0 }}>
          <Link to={'/'}>
            <Box display="flex" alignItems="center">
              <img
                src="/img/main_icon.png"
                alt="Autism Compass"
                height={isExtraSmallScreen ? '40px' :"80px"}
                style={headerStyles.logo}
              />
              <Typography variant="h6" maxWidth="100px" fontFamily="Jua" fontSize={26}>
                Autism Compass
              </Typography>
            </Box>
          </Link>
          <Box display="flex" alignItems="center" color="secondary" style={{ height:isExtraSmallScreen ? '100%' : '80px' }}>
            {smallerThanMedium
              ?  (
                  <IconButton
                    color="primary"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="menu-icon">
                    {menuOpen ? <CloseIcon  fontSize={isExtraSmallScreen ? 'small' : "large"}/> : <MenuIcon fontSize={isExtraSmallScreen ? 'small' : "large"}/>}
                  </IconButton>
                )
              : navigationItem}
          </Box>
        </Toolbar>
        {smallerThanMedium && menuOpen && (
          <SideBarNav navigations={navigations} />
        )}
      </Container>
    </AppBar>
  );
};

export default Header;
