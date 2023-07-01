import './loginUser.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from '../../context/DataContext.js';

import UsersContext from '../../context/UsersContext.js';

function LoginUser({ setLogin }) {
  const { user, setUser } = useContext(DataContext);
  const { login, errorLogin, setErrorLogin } = useContext(UsersContext);

  const navigate = useNavigate();

  function handleSubmitLogin(e) {
    e.preventDefault();
    setErrorLogin(false);
    const userData = {
      email: e.target[0].value,
      password: e.target[1].value,
    };
    //console.log(userData)
    login(userData, setLogin).then(() => navigate('/'));

    // setLogin(false)
  }

  console.log(user);
  return (
    <div className='login-container'>
      <div className='login-logo'></div>
      <div className='login-alert-container'>
        <h1>Municipalidad de Morón</h1>
        <h2>Dirección de Epidemiología</h2>
        <form className='form-login' onSubmit={handleSubmitLogin}>
          <input
            type='email'
            className='calendar-input'
            placeholder='Ingrese su mail'
            onKeyDown={() => setErrorLogin(false)}
          />
          <input
            className='calendar-input'
            placeholder='Ingrese su contraseña'
            type='password'
            name='password'
            onKeyDown={() => setErrorLogin(false)}
          />
          <button className='buttonActive' type='submit'>
            Iniciar sesión
          </button>
        </form>
        {errorLogin && <p>Usuario o contraseña incorrecto</p>}
        {/* <h3>Olvidé mi contraseña</h3> */}
      </div>
    </div>
  );
}

export default LoginUser;
