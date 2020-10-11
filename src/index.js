import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Register from './pages/Register'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={ Register } exact />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
