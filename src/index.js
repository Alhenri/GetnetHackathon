import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PageHome from './pages/PageHome'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={ PageHome } exact />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
