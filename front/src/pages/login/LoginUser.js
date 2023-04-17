import React from 'react';
import './loginUser.css';
import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import DataContext from '../../context/DataContext';
import { URI } from '../../utils';


function LoginUser({setLogin}) {


  const {
 user,
setUser
  } = useContext(DataContext);


  const navigate = useNavigate()


  function handleSubmitLogin(e) {
    e.preventDefault()
const userData = {
  email: e.target[0].value,
password: e.target[1].value
}
//console.log(userData)
login(userData)
   
   // setLogin(false)
  }



  async function login (user){
   console.log('hola')
    try {
      let response = await fetch(`${URI}/api/users/login`,{
        method: "POST",
      //  mode: 'cors',
      headers: { "Content-Type": "application/json" },
 // headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: JSON.stringify( 
          {
         email: user.email,
         password: user.password
        }
       ),
      })
   

      if (response.status === 200) {
        const responseData = await response.json()
        console.log(responseData)
        setUser(responseData.user)
        navigate('/')
        setLogin(false)
       
      } else {
      throw new Error('error')
        
      }
    } catch (error) {
      console.log(error)
    }
   
  }
console.log(user)
  return (
    <div className='login-container'>
      <div className='login-logo'></div>
      <div className='login-alert-container'>
        <h1>Municipalidad de Morón</h1>
        <h2>Dirección de Epidemiología</h2>
        <form className='form-login' onSubmit={handleSubmitLogin}>
          <input className='calendar-input' placeholder='Ingrese su mail' />
          <input className='calendar-input' placeholder='Ingrese su contraseña' type='password' name='password'/>
          <button className='buttonActive' type='submit'>Iniciar sesión</button>
        </form>
        {/* <h3>Olvidé mi contraseña</h3> */}
        
      </div>
    </div>

  )
}

export default LoginUser