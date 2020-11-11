import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './assets/css/application.css';
import MainLayout from './layouts/MainLayout';
import OutLayout from './layouts/OutLayout';
import AppLayout from './layouts/AppLayout';


const theme = createMuiTheme({
  typography: {
    fontFamily: 'Naval Group, Roboto'
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': ['Naval Group']
      }
    },
  },
  palette: {
    primary: {
      main: '#1f4492'
    },
    secondary: {
      main: '#e1051e'
    }

  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/auth" />
          <Route path="/auth" component={OutLayout} />
          <Route paht='/ngcs' component={MainLayout} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

