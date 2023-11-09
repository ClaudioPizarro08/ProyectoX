import React from 'react'

export const DashboardPage = ({ user, setUser }) => {
  const handleLogout = () => {
    setUser([])
  }
  return (
    <div>
      <h1>DashboardPage</h1>
      <h2>{user}</h2>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>

  )
}
