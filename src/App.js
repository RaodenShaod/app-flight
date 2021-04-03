import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/session/Login';
import Register from './components/session/Register';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => <Redirect to='/home' />} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
