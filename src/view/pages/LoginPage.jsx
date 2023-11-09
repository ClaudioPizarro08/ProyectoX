import React, { useState } from 'react'
import { Container } from '../components/Container/Container'
import './LoginPage.css'

export function LoginPage ({ setUser }) {
  const [nombre, setNombre] = useState('')
  const [contraseña, setContraseña] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (nombre === '' || contraseña === '') {
      setError(true)
      return
    }

    setError(false)

    setUser([nombre])
  }

  return (
    <Container>
      <section>
        <form
          className='formulario'
          onSubmit={handleSubmit}
        >
          <h1>Iniciar Sesión</h1>
          <input
            type='text'
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
          <input
            type='password'
            value={contraseña}
            onChange={e => setContraseña(e.target.value)}
          />
          <button>Iniciar Sesión</button>
          {error && <p>Todos los campos son obligatorios</p>}
        </form>
      </section>
    </Container>
  )
}
