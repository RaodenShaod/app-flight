// Destructurando las props que pasamos desde el componente "lógico" del register
const LoginForm = ({
  errors,
  register,
  onSubmit,
  handleReset,
  handleSubmit
}) => {
  return (
    /* De forma el evento handleSubmit de "useForm" evalua que hacer con los datos del 
     * formulario onSubmit esta definido en Login.js
     */
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='form-group'>
        <label htmlFor='username' className='form-label'>
          Usuario o Email
        </label>
        <input
          type='text'
          name='username'
          placeholder='Usuario'
          className='form-control'
          // De esta forma se pasa la referencia la cual useForm tiene que evaluar
          {...register('username', {
            required: {
              value: true,
              message: 'El campo del (usuario o email) es requerido'
            }
          })}
        />
        {/* De esta forma podemos ver si existe un error en el input por si este es requerido */}
        <span className='text-danger text-small d-block mb-2'>
          {errors?.username?.message}
        </span>
      </div>
      <div className='form-group'>
        <label htmlFor='password' className='form-label'>
          Contraseña
        </label>
        <input
          type='password'
          name='password'
          placeholder='Contraseña'
          className='form-control'
          {...register('password', {
            required: {
              value: true,
              message: 'El campo contraseña es requerida'
            }
          })}
        />
        <span className='text-danger text-small d-block mb-2'>
          {errors?.password?.message}
        </span>
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center' }}
        className='form-group'
      >
        <input
          type='submit'
          value='Enviar'
          className='btn btn-primary'
          style={{ margin: '5px 10px 5px 5px' }}
        />
        <input
          type='reset'
          value='Cancelar'
          className='btn btn-danger'
          style={{ margin: '5px 5px 5px 10px' }}
          onClick={handleReset}
        />
      </div>
    </form>
  );
};

export default LoginForm;
