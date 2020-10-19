import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import { Test } from '@controller/test';

import Main from './containers/Main/Main';

const App: React.FC = () => {
  Test();
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Redirect to="/" />
    </Switch>
  );
};

export default App;
