import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { RoutesManager } from './components';

// import './assets/css/application.css';
import './index.css';
import { AuthReducer, UsersReducer } from './store/reducers';

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
const rootReducer = combineReducers({
  auth: AuthReducer,
  users: UsersReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

console.log('Adresse du serveur : ' + process.env.REACT_APP_NGCS_SERVER);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RoutesManager />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

