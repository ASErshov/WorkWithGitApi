import React from 'react';
import MainPage from './features/MainPage';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import * as locales from '@material-ui/core/locale';

const theme = createMuiTheme(
  locales['ruRU']
);

function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <MainPage/>
    </MuiThemeProvider>
  );
}

export default App;