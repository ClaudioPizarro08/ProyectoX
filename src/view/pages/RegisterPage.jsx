import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterPage = () => {
  return (
    <div className='container'>
      <form className='container__form'>
        <h1 className='form__title'>Bienvenid@ Regístrate</h1>

        <div className='form__input'>
          <i className='fas fa-envelope' />
          <input type='nombre' name='nombre' placeholder='Ingresa tú nombre completo' />
        </div>

        <div className='form__input'>
          <i className='fas fa-envelope' />
          <input type='email' name='email' placeholder='Ingresa tú email' />
        </div>

        <div className='form__input'>
          <i className='fas fa-lock' />
          <input type='password' name='password' placeholder='Ingresa tú contraseña' />
        </div>

        <button type='submit' className='btn__form'>Registrarse</button>

        <Link to='/login' className='iniciarsesion__link'>Iniciar Sesión</Link>
      </form>

    </div>
  )
}
