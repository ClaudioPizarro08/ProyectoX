import { useContext, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './LoginPage.css'
import { TaskContext } from '../../context/task'

export const LoginPage = () => {
  const { loginError, setLoginError } = useState(null)
  const { dispatch } = useContext(TaskContext)
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/register')
  }

  const handleLogin = (event) => {
    event.preventDefault()
    fetch('https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/user/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: event.target.elements.email.value,
        password: event.target.elements.password.value
      })
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Credenciales incorrectas')
        }
      })
      .then((data) => {
        dispatch({ type: 'LOGIN_USER', payload: data.user })
        navigate('/dashboard')
      }).catch(error => {
        setLoginError(error)
      })
  }

  return (
    <div className='container'>
      <form onSubmit={handleLogin} className='container__form'>
        <h1 className='form__title'>Bienvenid@ Inicia Sesión</h1>

        <div className='form__input'>
          <i className='fas fa-envelope' />
          <input type='email' name='email' placeholder='Ingresa tu email' />
        </div>

        <div className='form__input'>
          <i className='fas fa-lock' />
          <input type='password' name='password' placeholder='Ingresa tu contraseña' />
        </div>

        <button type='submit' className='btn__form'>Ingresar</button>

        {loginError && (
          <p className='error-message'>{loginError}</p>
        )}

        <Link to='registro' className='register__link' onClick={handleClick}>Registrarse</Link>
      </form>

    </div>
  )
}
