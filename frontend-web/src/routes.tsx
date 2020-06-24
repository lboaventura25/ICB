import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Profile from './pages/Profile';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/admin-profile" component={Profile} />
    </BrowserRouter>
  );
};

export default Routes;
