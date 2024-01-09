import React from 'react';
import { Box } from '@mui/material';
import { headerStyles } from '../../styles/theme';
import './NavItem.scss';
import { Link } from 'react-router-dom';
import useBreakpoints from '../../hooks/useBreakpoints';

interface NavItemProps {
  page: {
    name: string;
    path: string;
  };
}

const NavItem: React.FC<NavItemProps> = ({ page }) => {
  const { isExtraSmallScreen} = useBreakpoints()
  return (
    <>
        <Link to={page.path} style={{ height: '100%' }}>
          <Box
            sx={{
              ...headerStyles.navigationLink,
              ml: isExtraSmallScreen ? '0' : '',
              '&:hover': {
                color: '#008492',
                borderBottom: '3px solid #008492',
              },
            }}>
            {page.name}
          </Box>
        </Link>
    </>
  );
};

export default NavItem;
