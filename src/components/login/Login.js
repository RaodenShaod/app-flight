import { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';

const initialLoginForm = {
  username: '',
  password: ''
};

const Login = ({ history }) => {
  const [loginForm, setLoginForm] = useState(initialLoginForm);

  const handleChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!loginForm.username || !loginForm.password) {
      alert('Datos incompletos');
      return;
    } else {
      alert('Se pudo procesar sus datos...');
    }

    history.push('/');

    handleReset();
  };

  const handleReset = () => {
    setLoginForm(initialLoginForm);
  };

  return (
    <div>
      <h2>Login</h2>
      <LoginForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleReset={handleReset}
        form={loginForm}
      />
      <Link to='../register'>Registrarse</Link>
    </div>
  );
};

export default Login;
