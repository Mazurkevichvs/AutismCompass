import React from 'react';
import {
  Box,
  MenuItem,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
} from '@mui/material';
import { headerStyles } from '../../styles/theme';
import {
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  ChevronRight as ChevronRightIcon,
} from '@mui/icons-material';
import './NavItem.scss';

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
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }
    prevOpen.current = open;
  }, [open]);
  return (
    <>
      <Box
        sx={{
          ...headerStyles.navigationLink,
          '&:hover': {
            color: '#008492',
            borderBottom: '3px solid #008492',
          },
        }}
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? 'composition-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}>
        {page.name} {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </Box>
      {page.sublinks ? 
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
          >
          {({ TransitionProps, placement }) => (
            <Grow
            
              {...TransitionProps}
              style={{
                transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}>
              <Paper sx={{bgcolor: 'rgba(117, 188, 105)'}}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}>
                    { page.sublinks?.map((sublink, i) => (
                      <MenuItem
                        sx={{
                          color: '#00454C',
                        }}
                        key={i}
                        onClick={handleClose}>
                        {sublink.name} <ChevronRightIcon />
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
       : null}
    </>
  );
};

export default NavItem;
