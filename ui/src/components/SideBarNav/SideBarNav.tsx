import React from 'react';
import { Box, MenuList, Paper, MenuItem } from '@mui/material';
import { ChevronRight as ChevronRightIcon, Close as CloseIcon } from '@mui/icons-material';
import './SideBarNav.scss'
import { NavigationsProps } from '../../types/types';

interface SideMenuProps extends NavigationsProps {
    setMenuOpen: (value: boolean) => void,
    menuOpen: boolean
}

const SideMenu: React.FC<SideMenuProps> = ({ navigations, menuOpen ,setMenuOpen }) => {
  return (
    <Paper className={`sidebar-nav ${menuOpen ? 'open' : ''}`}>
      <Box display="flex" justifyContent="flex-end">
        <CloseIcon fontSize="large" onClick={() => setMenuOpen(false)} />
      </Box>
      <MenuList>
        {navigations.map((page, i) => (
          <MenuItem key={i}>
            <div className='sidebar__item'>
              <span>{page.name}</span>
              {page.sublinks && (
                <ChevronRightIcon fontSize="small" /> 
              )}
            </div>
          </MenuItem>
        ))}
      </MenuList>
    </Paper>
  );
};

export default SideMenu;
