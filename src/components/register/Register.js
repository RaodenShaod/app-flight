import { useState } from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from './RegisterForm';

const initialRegisterForm = {
  firstName: '',
  lastName: '',
  country: '',
  city: '',
  email: '',
  phone: ''
};

const Register = ({ history }) => {
  const [registerForm, setRegisterForm] = useState(initialRegisterForm);

  const handleChange = (e) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!registerForm) {
      alert('Datos incompletos');
      return;
    } else {
      alert('Se pudo procesar sus datos...');
    }

    history.push('/');

    handleReset();
  };

  const handleReset = () => {
    setRegisterForm(initialRegisterForm);
  };
  return (
    <div>
      <h1>Icarus Viajes</h1>
      <RegisterForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleReset={handleReset}
        form={registerForm}
      />
      <Link to='../login'>Iniciar Sesión</Link>
    </div>
  );
};

export default Register;
