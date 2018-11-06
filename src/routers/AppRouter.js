import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import PageNotFound from '../components/PageNotFound';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import PortfolioPages from '../components/PortfolioPages';
import Dashboard from '../components/Dashboard';

const AppRouter = () => (
    <BrowserRouter>
    <div>
      <Header/>
      <Switch>    
        <Route path="/" component={Dashboard} exact={true} />
        <Route path="/portfolio" component={Portfolio} exact={true} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio/:id" component={PortfolioPages} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;