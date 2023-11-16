import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './RegisterPage.css'

export const RegisterPage = () => {
  const navigate = useNavigate()

  const createUser = (body) => {
    fetch('https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(response => response.user.firstName)
  }

  const handleSubmitForm = (event) => {
    event.preventDefault()
    let body = {}
    for (const element of event.target.elements) {
      if (element.name) {
        body = { ...body, [element.name]: element.value }
      }
    }
    create(body, event)
  }

  const create = (body, event) => {
    createUser(body)
      .then(user => {
        window.alert('Se creó correctamente el usuario' + user.firstName + 'Ya puedes iniciar sesión')
        event.target.reset()
        navigate('/login')
      })
      .catch(error => {
        console.error('Error al crear el usuario:', error)
        window.alert('No se pudo crear el usuario. Por favor, inténtelo nuevamente. ')
      })
      .finally(() => {
        event.target.reset()
      })
  }

  return (
    <>
      <div className='card'>

        <form onSubmit={handleSubmitForm} className='card__form'>
          <fieldset className='card__form-register'>
            <p>Nombre:</p>
            <input
              type='text'
              id='nombre'
              name='firstName'
              textLabel='Nombre'
              required
            />
            <p>Apellido:</p>
            <input
              type='text'
              id='apellido'
              name='lastName'
              textLabel='Apellido'
              required
            />
            <p>Email:</p>
            <input
              type='text'
              id='email'
              name='email'
              textLabel='E-mail:'
              required
            />
            <p>Contraseña:</p>
            <input
              type='password'
              id='password'
              name='password'
              textLabel='Contraseña'
              required
            />
            <button type='submit' className='btn btn-coral'>
              Registrarme
            </button>
            <span>Ya tienes cuenta? <Link to='/login' className='login__link'>Inicia Sesión</Link> </span>
          </fieldset>
        </form>
      </div>

    </>
  )
}
