import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';

// History es una prop que pasa react-router por defecto cada vez que renderiza el "Route"
const Login = ({ history }) => {
  // Destructuración de los métodos y objetos de useForm
  const {
    formState: { errors },
    register,
    handleSubmit
  } = useForm();

  const handleReset = (e) => {
    // History.push('/') nos manda a cierta ruta para viajar entre componentes dependiendo de la ruta
    // history.push('/home')
  };

  const onSubmit = (e) => {
    alert(JSON.stringify(e));
    // history.push('/home');
  };

  return (
    <div>
      <h2>Inciar Sesión</h2>
      <LoginForm
        errors={errors}
        register={register}
        onSubmit={onSubmit}
        handleReset={handleReset}
        handleSubmit={handleSubmit}
      />
      {/* Con el Link tenemos una SPA para que no se tenga que recargar toda la página de nuevo*/}
      <Link to='../register'>Registrarse</Link>
    </div>
  );
};

export default Login;
