import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './index.css'

const theme = createTheme({

  typography: {
    fontFamily: ['DM Sans', 'Roboto'].join(','),
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