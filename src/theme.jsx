import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5000A2', // Custom primary color
    },
    secondary: {
      main: '#9c27b0', // Custom secondary color
    },
    background: {
      default: '#5000A2', // Background color
      paper: '#ffffff', // Card and paper background
    },
  },
  button: {
    fontFamily: 'Roboto Slab, Roboto, Arial, sans-serif',
  },
  typography: {
    fontFamily: 'Roboto Slab, Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
    },
  },
  shape: {
    borderRadius: 12, // Global border radius
  },
});

export default theme;
