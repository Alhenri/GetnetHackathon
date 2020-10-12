import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PageHome from './pages/PageHome';
import NotFound from './pages/NotFound';
import Register from './pages/Register'
import RegisterFisica from './pages/RegisterFisica';
import RegisterJuridica from './pages/RegisterJuridica';
import Login from './pages/Login';
import LoginFisica from './pages/LoginFisica';
import LoginJuridica from './pages/LoginJuridica';
import PerfilJuridica from './pages/PerfilJuridica'
import PerfilFisica from './pages/PerfilFisica'
import Cursos from './pages/PageCursos';
import Tutoriais from './pages/Tutoriais';
import Ajuda from './pages/Ajuda';
import QueroCredito from './pages/QueroCredito'


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={ PageHome } exact />
      <Route path='/RegisterFisica' component={ RegisterFisica } exact />
      <Route path='/Register' component={ Register } exact />
      <Route path='/RegisterJuridica' component={ RegisterJuridica } exact />
      <Route path='/PerfilJuridica' component={ PerfilJuridica } exact />
      <Route path='/PerfilFisica' component={ PerfilFisica } exact />
      <Route path='/Login' component={ Login } exact />
      <Route path='/LoginFisica' component={ LoginFisica } exact />
      <Route path='/LoginJuridica' component={ LoginJuridica } exact />
      <Route path='/Cursos' component={ Cursos } exact />
      <Route path='/Tutoriais' component={ Tutoriais } exact />
      <Route path='/Ajuda' component={ Ajuda } exact />
      <Route path='/QueroCredito' component={ QueroCredito } exact />
      <Route component={ NotFound } />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
