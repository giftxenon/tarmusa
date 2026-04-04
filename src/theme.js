import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary:   { main: '#2d4a2d', light: '#4a7c4a', dark: '#1a2e1a', contrastText: '#ffffff' },
    secondary: { main: '#7fb347', light: '#a8cc72', dark: '#5a8a2a', contrastText: '#ffffff' },
    background:{ default: '#f5f0e8', paper: '#ffffff' },
    text:      { primary: '#2a2a2a', secondary: '#6b7c6b' },
  },
  typography: {
    fontFamily: '"DM Sans", sans-serif',
    h1: { fontFamily: '"Playfair Display", serif', fontWeight: 700 },
    h2: { fontFamily: '"Playfair Display", serif', fontWeight: 700, lineHeight: 1.2 },
    h3: { fontFamily: '"Playfair Display", serif', fontWeight: 600 },
    h4: { fontFamily: '"Playfair Display", serif', fontWeight: 600 },
    h5: { fontFamily: '"Playfair Display", serif', fontWeight: 500 },
    h6: { fontFamily: '"DM Sans", sans-serif', fontWeight: 600 },
  },
  shape: { borderRadius: 16 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '99px',
          textTransform: 'none',
          fontWeight: 600,
          fontFamily: '"DM Sans", sans-serif',
          fontSize: '0.95rem',
          padding: '0.75rem 2rem',
          transition: 'all 0.3s ease',
        },
        containedPrimary: {
          background: '#4a7c4a',
          '&:hover': { background: '#1a2e1a', transform: 'translateY(-2px)', boxShadow: '0 8px 24px rgba(26,46,26,0.3)' },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 8px 32px rgba(26,46,26,0.10)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': { transform: 'translateY(-6px)', boxShadow: '0 20px 60px rgba(26,46,26,0.16)' },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            background: '#f5f0e8',
            '&:hover fieldset': { borderColor: '#4a7c4a' },
            '&.Mui-focused fieldset': { borderColor: '#4a7c4a' },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'transparent',
          boxShadow: 'none',
          transition: 'background 0.3s ease',
        },
      },
    },
  },
});

export default theme;