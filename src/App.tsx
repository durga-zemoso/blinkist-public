import React, { ReactElement } from 'react';

import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import baseTheme from './themes';
import TrendingBlinks from './pages/TendingBlinks';
const App = (): ReactElement => {
  return (
    <ThemeProvider theme={baseTheme}>
      <TrendingBlinks></TrendingBlinks>
    </ThemeProvider>
  );
};

export default App;
