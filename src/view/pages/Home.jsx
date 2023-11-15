import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/register')
  }

  return (
    <form>
      <h1>Mantente organizado y eficiente con una plataforma robusta de gestión de tareas</h1>

      <h2>Planifica, gestiona y monitorea tus tareas de una forma fácil y divertida</h2>

      <img
        src='Oficinatrabajando.png' alt='img de la pagina'
        className='img-home'
      />

      <button onClick={handleClick}>Comenzar ahora</button>
    </form>
  )
}
