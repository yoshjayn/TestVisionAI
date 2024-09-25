import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { defaultTheme } from './theme/defaultTheme';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline>
          <App />
        </CssBaseline>
      </ThemeProvider>
    </React.StrictMode>
  </BrowserRouter>,
);
