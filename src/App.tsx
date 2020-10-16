import React from 'react';
import Main from './containers/Main/Main';
import {Switch, Redirect, Route} from 'react-router-dom';

const App: React.FC = () => {
  let routes = (
    <Switch>
      <Route path="/" exact component={Main}/>
      <Redirect to="/"/>
    </Switch>
  );

  return (
    <div>
      {routes}
    </div>
  );
};

export default App;
