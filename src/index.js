import React from 'react';
import ReactDOM from 'react-dom';
// import 'fontsource-bahiana'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PageHome from './pages/Register'
import NotFound from './pages/NotFound'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={ PageHome } exact />
      <Route component={ NotFound } />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
