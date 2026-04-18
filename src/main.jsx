import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider } from './ThemeContext.jsx';
import { LanguageProvider } from './LanguageContext.jsx';
import './index.css';

import "@fontsource/outfit";
import "@fontsource/roboto";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LanguageProvider>
  </React.StrictMode>
);
