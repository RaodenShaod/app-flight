const RegisterForm = ({ handleChange, handleSubmit, handleReset, form }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='firstName'>Nombres</label>
      <input
        type='text'
        name='firstName'
        placeholder='Nombres'
        onChange={handleChange}
        value={form.firstName}
      />
      <label htmlFor='lastName'>Apellidos</label>
      <input
        type='password'
        name='password'
        placeholder='Apellidos'
        onChange={handleChange}
        value={form.lastName}
      />
      <label htmlFor='country'>País</label>
      <input
        type='text'
        name='country'
        placeholder='País'
        onChange={handleChange}
        value={form.country}
      />
      <label htmlFor='city'>Ciudad</label>
      <input
        type='text'
        name='city'
        placeholder='Ciudad'
        onChange={handleChange}
        value={form.city}
      />
      <label htmlFor='email'>Email</label>
      <input
        type='text'
        name='email'
        placeholder='Email'
        onChange={handleChange}
        value={form.email}
      />
      <label htmlFor='phone'>Teléfono</label>
      <input
        type='text'
        name='phone'
        placeholder='Teléfono'
        onChange={handleChange}
        value={form.phone}
      />
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <input type='submit' value='Enviar' />
        <input type='reset' value='Cancelar' onClick={handleReset} />
      </div>
    </form>
  );
};

export default RegisterForm;
