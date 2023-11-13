import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Container,
  useMediaQuery,
  Theme,
  IconButton,
} from '@mui/material';
import { NavItem, SideBarNav } from '..';
import { headerStyles } from '../../styles/theme';
import { Menu as MenuIcon } from '@mui/icons-material';
import {NavigationsProps} from '../../types/types'
import './Header.scss'

const Header: React.FC<NavigationsProps> = ({navigations}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const navigationItem = navigations.map((page, i) => <NavItem key={i} page={page} />);
  return (
    <AppBar position="absolute" style={headerStyles.appBar}>
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', padding: 0 }}>
          <Box display="flex" alignItems="center">
            <img
              src="/img/main_icon.png"
              alt="Autism Compass"
              height="80px"
              style={headerStyles.logo}
            />
            <Typography variant="h6" maxWidth="100px" fontFamily="Jua" fontSize={26}>
              Autism Compass
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" color="secondary" style={{ height: '100%' }}>
            {isSmallScreen ? ( !menuOpen &&
              <IconButton color="primary" onClick={() => setMenuOpen(true)} className="menu-icon">
                <MenuIcon />
              </IconButton>
            ) : (
                navigationItem
            )}
          </Box>
          
        </Toolbar>
      {isSmallScreen && menuOpen && (
              <SideBarNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} navigations={navigations} />
            )}
      </Container>
    </AppBar>
  );
};

export default Header;
