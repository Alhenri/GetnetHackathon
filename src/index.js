import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PageHome from './pages/PageHome';
import NotFound from './pages/NotFound';
import Register from './pages/Register'
import RegisterFisica from './pages/RegisterFisica';
import RegisterJuridica from './pages/RegisterJuridica'
import Login from './pages/Login';
import PerfilJuridica from './pages/PerfilJuridica'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={ PageHome } exact />
      <Route path='/RegisterFisica' component={ RegisterFisica } exact />
      <Route path='/Register' component={ Register } exact />
      <Route path='/RegisterJuridica' component={ RegisterJuridica } exact />
      <Route path='/PerfilJuridica' component={ PerfilJuridica } exact />
      <Route path='/Login' component={ Login } exact />
      <Route component={ NotFound } />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
