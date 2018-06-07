import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; // named imports can be found here: https://reacttraining.com/react-router/web/guides/philosophy

import Create from './../components/Create';
import Dashboard from './../components/Dashboard';
import Edit from './../components/Edit';
import Header from './../components/Header';
import Help from './../components/Help';
import NotFound from './../components/NotFound';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path='/' component={Dashboard} exact={true}/>
          <Route path='/create' component={Create}/>
          <Route path='/edit/:id' component={Edit}/>
          <Route path='/help' component={Help}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default AppRouter