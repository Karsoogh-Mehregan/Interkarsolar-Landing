import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AboutUs from '../containers/AboutUs';
import Landing from '../containers/Landing/';
import OurTeam from '../containers/OurTeam';

const Root = () => {
  return (
    <Switch>
      <Route path="/about_us" component={AboutUs} />
      <Route path="/our_team" component={OurTeam} />
      <Route path="/" component={Landing} />
    </Switch>
  );
};
export default Root;
