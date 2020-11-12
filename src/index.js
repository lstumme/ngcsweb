import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';


// import './assets/css/application.css';
import './index.css';
import { MainLayout, OutLayout } from './layouts';
import routes from './routes';
import authReducer from './store/reducers/auth';

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
  auth: authReducer
});
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Redirect exact from="/" to="/auth" />
            <Route path="/auth" component={OutLayout} />
            <Route path='/ngcs' render={(props) => (<MainLayout {...props} basePath='/ngcs' routes={routes} />)} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

