// Destructurando las props que pasamos desde el componente "lógico" del login
const RegisterForm = ({
  errors,
  register,
  onSubmit,
  handleReset,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='form-group'>
        <label htmlFor='firstName' className='form-label'>
          Nombres
        </label>
        <input
          type='text'
          name='firstName'
          placeholder='Nombres'
          // De esta forma se pasa la referencia la cual useForm tiene que evaluar
          {...register('firstName', {
            required: {
              value: true,
              // Mensaje que se mostrara
              message: 'El campo de los nombres es requerido'
            }
          })}
        />
        {/* De esta forma podemos ver si existe un error en el input por si este es requerido */}
        <span className='text-danger text-small d-block mb-2'>
          {errors?.firstName?.message}
        </span>
      </div>
      <div className='form-group'>
        <label htmlFor='lastName' className='form-label'>
          Apellidos
        </label>
        <input
          type='text'
          name='lastName'
          placeholder='Apellidos'
          {...register('lastName', {
            required: {
              value: true,
              message: 'El campo de los apellidos es requerido'
            }
          })}
        />
        <span className='text-danger text-small d-block mb-2'>
          {errors?.username?.message}
        </span>
      </div>
      <div className='form-group'>
        <label htmlFor='country' className='form-label'>
          País
        </label>
        <input
          type='text'
          name='country'
          placeholder='País'
          {...register('country', {
            required: {}
          })}
        />
        {/* <span className='text-danger text-small d-block mb-2'>
          {errors?.username?.message}
        </span> */}
      </div>
      <div className='form-group'>
        <label htmlFor='city' className='form-label'>
          Ciudad
        </label>
        <input
          type='text'
          name='city'
          placeholder='Ciudad'
          {...register('city')}
        />
        {/* <span className='text-danger text-small d-block mb-2'>
          {errors?.city?.message}
        </span> */}
      </div>
      <div className='form-group'>
        <label htmlFor='email' className='form-label'>
          Email
        </label>
        <input
          type='text'
          name='email'
          placeholder='Email'
          {...register('email')}
        />
        {/* <span className='text-danger text-small d-block mb-2'>
          {errors?.email?.message}
        </span> */}
      </div>
      <div className='form-group'>
        <label htmlFor='phone' className='form-label'>
          Teléfono
        </label>
        <input
          type='text'
          name='phone'
          placeholder='Teléfono'
          {...register('phone')}
        />
        {/* <span className='text-danger text-small d-block mb-2'>
          {errors?.username?.message}
        </span> */}
      </div>
      <div className='form-group'>
        <label htmlFor='phone' className='form-label'>
          Contraseña
        </label>
        <input
          type='text'
          name='password'
          placeholder='Contraseña'
          {...register('password', {
            minLength: 8,
            required: {
              value: true,
              message: 'El campo de la contraseña es requerida'
            }
          })}
        />
        <span className='text-danger text-small d-block mb-2'>
          {errors?.username?.message}
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

export default RegisterForm;
