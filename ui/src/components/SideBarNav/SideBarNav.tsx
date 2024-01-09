import React from 'react';
import { Box, MenuList, Paper, MenuItem, useTheme } from '@mui/material';
import './SideBarNav.scss'
import { NavigationsProps } from '../../types/types';
import { headerStyles } from '../../styles/theme';
import { Link } from 'react-router-dom';
import useBreakpoints from '../../hooks/useBreakpoints';

const SideMenu: React.FC<NavigationsProps> = ({ navigations }) => {
  const {isExtraSmallScreen} = useBreakpoints();
  const theme = useTheme();
  return (
    <Paper sx={{bgcolor: headerStyles.appBar.backgroundColor}} className='sidebar__nav'>
      <Box display="flex" justifyContent="flex-end"> 
      </Box>
      <MenuList sx={{color: theme.palette.primary.main }}>
        {navigations.map((page, i) => (
          <MenuItem key={i} sx={{minHeight: isExtraSmallScreen ? '24px' : '48px', whiteSpace: 'wrap'}}>
            <div className='sidebar__item'>
              <Link to={page.path}>{page.name}</Link>
            </div>
          </MenuItem>
        ))}
      </MenuList>
    </Paper>
  );
};

export default SideMenu;
