import { createTheme } from '@mui/material/styles';

export const globalTheme = createTheme({
  MuiButton: {
    styleOverrides: {
        contained: {
            fontSize: '0.875rem'
        },
    },
  },
  palette: {
    primary: {
      light:'#AFF7EE',
      main: '#5de4d5',
      dark: '#4FC2B4',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },

    secondary: {
      light:'#686D75',
      main: '#2D3A4D',
      dark: '#DBE6F7',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },

    warning:{
      light:'#D9E5F7',
      main: '#F27035',
      dark: '#A64C24',
    },

    error: {
      light:'#F47F7F',
      main: '#D32F2F',
      dark: '#733C3C',
    },

    info:{
      light:'#F5F5F5',
      main: '#D9D9D9',
      dark: '#7D7D7D',
    },

    success:{
      light:'#A4E8E0',
      main: '#5DE4D5',
      dark: '#37B0A2',
    },

    custom: {
      light:'#5BFCEA',
      main: '#2D394C',
      dark: '#2D3A4D',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },

    with:{
      main: '#FFFFFF'

    }
  
  },
  typography: {
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  //spacing: [0, 4, 8, 16, 32, 64],
});
