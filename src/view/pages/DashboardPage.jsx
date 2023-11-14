import React from 'react'

export const DashboardPage = () => {
  return (
    <form>
      <h1>To do List</h1>
      <input
        type='text'
        placeholder='Introduce la tarea'
      />
      <input
        type='text'
        placeholder='Descripción'
      />
      <input
        type='text'
        placeholder='Fecha DD/MM/AAAA'
      />
      <input
        type='submit'
        className='btn'
        value='AGREGAR'
      />
    </form>
  )
}
