import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import './index.css'

const theme = createTheme({

  typography: {
    fontFamily: ['DM Sans', 'sans-serif'].join(','),
  },

  palette: {
    mode: 'light',
    primary: {
      main: '#8D448B',
    },
    secondary: {
      main: '#0F2137',
    },
  }     
});

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <App />
    </ThemeProvider>   
  </React.StrictMode>,
)