import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './components/Home';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => <Redirect to='/home' />} />
        <Route exact path='/home' component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
