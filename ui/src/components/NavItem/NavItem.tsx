import React from 'react';
import { Box, Menu, Fade, MenuItem } from '@mui/material';
import { headerStyles } from '../../styles/theme';
import {
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  ChevronRight as ChevronRightIcon,
} from '@mui/icons-material';
import './NavItem.scss'

interface NavItemProps {
  page: {
    name: string;
    path: string;
    sublinks?: {
      name: string;
      path: string;
    }[];
  };
}

const NavItem: React.FC<NavItemProps> = ({ page }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    if(open) handleClose()
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box
        sx={{
          ...headerStyles.navigationLink,
          '&:hover': {
            color: '#008492',
          },
        }}
        onClick={handleClick}>
        {page.name} {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </Box>
      {page.sublinks ? (
        <Menu
          id="fade-menu"
          MenuListProps={{
            'aria-labelledby': 'fade-button',
            
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
          >
          {page.sublinks.map((sublink, i) => (
            <MenuItem
              sx={{
                color: '#00454C',
              }}
              key={i}
              onClick={handleClose}>
              {sublink.name} <ChevronRightIcon />
            </MenuItem>
          ))}
        </Menu>
      ) : null}
    </>
  );
};

export default NavItem;
