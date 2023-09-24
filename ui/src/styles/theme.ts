import { createTheme } from '@mui/material/styles';

export const headerStyles = {
  appBar: {
    backgroundColor: 'rgba(117, 188, 105, 0.7)',
    color: '#00454C',
    top: '0',
    left: '0',
    width: '100%',
    zIndex: '2'
  },
  logo: {
    marginRight: '20px',
  },
  navigationLink: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    ml: '30px',
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: '#00454C',
    },
    secondary: {
      main: '#ffffff',
    },
    error: {
      main: '#FF0000',
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: 'Noto Sans , sans-serif',
    fontSize: 16,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  spacing: 4,
});
