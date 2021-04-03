const LoginForm = ({ handleSubmit, handleChange, handleReset, form }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='username'>Usuario</label>
      <input
        type='text'
        name='username'
        placeholder='Usuario'
        onChange={handleChange}
        value={form.username}
      />
      <label htmlFor='password'>Contraseña</label>
      <input
        type='password'
        name='password'
        placeholder='Contraseña'
        onChange={handleChange}
        value={form.password}
      />
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <input type='submit' value='Enviar' />
        <input type='reset' value='Cancelar' onClick={handleReset} />
      </div>
    </form>
  );
};

export default LoginForm;
