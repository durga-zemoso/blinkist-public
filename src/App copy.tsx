import './App.css';
import { ThemeProvider } from '@mui/material/styles';

import MyLibrary from './pages/myLibrary';
import React from 'react';
import baseTheme from './themes'

function App() {
  return <ThemeProvider theme={baseTheme}>
    <MyLibrary></MyLibrary>
  </ThemeProvider>;
}

export default App;
