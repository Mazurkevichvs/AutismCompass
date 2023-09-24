import React from 'react';
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
import { NavItem } from '..';
import { headerStyles } from '../../styles/theme';
import { Menu as MenuIcon } from '@mui/icons-material';

const NAVIGATIONS = [
  {
    name: 'Czym jest autyzm?',
    path: '/czym-jest-autyzm',
    sublinks: [
      { name: 'Podlink 1', path: '/czym-jest-autyzm/link1' },
      { name: 'Podlink 2', path: '/czym-jest-autyzm/link2' },
    ],
  },
  {
    name: 'Wsparcie dla osób z autyzmem',
    path: '/wsparcie',
    sublinks: [
      { name: 'Podlink 3', path: '/wsparcie/link3' },
      { name: 'Podlink 4', path: '/wsparcie/link4' },
    ],
  },
  { name: 'Test diagnozujący', path: '/test-diagnozujacy' },
  { name: 'Wydarzenia', path: '/wydarzenia' },
  { name: 'O nas', path: '/o-nas' },
];

const Header: React.FC = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const navigationItem = NAVIGATIONS.map((page, i) => <NavItem key={i} page={page} />);
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
          <Box display="flex" alignItems="center" color="secondary">
            {isSmallScreen ? (
              <IconButton color="primary">
                <MenuIcon />
              </IconButton>
            ) : (
              navigationItem
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
