import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {requireAuth} from "../Auth/hoc/require_auth";
import * as routes from "../../components/Constants/appRoutes";
import MenuBar from '../Menu';
import Home from '../Home';
import Login from '../Auth/login';

export default function AppRoutes(){
 
  return (
    <Router>
        <div>
            <Switch>
            <Route path={routes.LOGIN} component={Login} />
            <Route path={routes.MENUBAR} component={MenuBar} />
            <Route path={routes.HOME} component={Home} />
          </Switch>
          </div>
          </Router>
  )
}