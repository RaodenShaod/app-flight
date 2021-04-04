import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import RegisterForm from './RegisterForm';

// History es una prop que pasa react-router por defecto cada vez que renderiza el "Route"
const Register = ({ history }) => {
  // Destructuración de los métodos y objetos de useForm
  const {
    formState: { errors },
    register,
    handleSubmit
  } = useForm();

  const handleReset = () => {
    // History.push('/') nos manda a cierta ruta para viajar entre componentes dependiendo de la ruta
    // history.push('/home')
  };

  const onSubmit = (e) => {
    alert(JSON.stringify(e));
    // history.push('/home');
  };

  return (
    <div>
      <h2>Icarus Viajes</h2>
      <RegisterForm
        errors={errors}
        register={register}
        onSubmit={onSubmit}
        handleReset={handleReset}
        handleSubmit={handleSubmit}
      />
      {/* Con el Link tenemos una SPA para que no se tenga que recargar toda la página de nuevo*/}
      <Link to='../login'>Iniciar Sesión</Link>
    </div>
  );
};

export default Register;
