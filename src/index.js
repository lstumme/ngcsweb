import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './assets/css/application.css';
import MainLayout from './layouts/MainLayout';
import OutLayout from './layouts/OutLayout';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/auth" />
        <Route path="/auth" component={OutLayout} />
        <Route paht='/ngcs' component={MainLayout} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

