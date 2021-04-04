import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import NotFound from './components/NotFound';

const App = () => {
  return (
    // De react-router tenemos el BrowserRouter que es el componente global de todas las rutas que tendrá la pagina
    <BrowserRouter>
      {/* Switch nos ayuda a que si no existe una ruta a partir de las que ya tenemos por defecto 
      el componente <Route component={NotFound} /> se renderizara*/}
      <Switch>
        {/* Composición de todas nuestras rutas de nuestra Aplicación Web */}
        {/* Un caso especial que cuando alguien ingrese https://nuestrapagina.com/ le redireccioné a la ruta '/home'*/}
        {/* tambien podemos jugar con ":valueId" para encontrar valores especificos(recomendado para cuando encuentren un 
          destino y este tenga un id definido) */}
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
