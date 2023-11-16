import React, { useContext, useEffect } from 'react'
import { TaskContext } from '../../context/task'
import './DashboardPage.css'

export const DashboardPage = () => {
  const { state, dispatch } = useContext(TaskContext)

  useEffect(() => {
    fetch(`https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/todo?userId=${state.user._id}`)
      .then((response) => response.json())
      .then((response) => {
        dispatch({ type: 'LOAD_TASKS', payload: response.todos })
      })
  }, [])

  const handleDelete = (taskId) => {
    fetch('https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/todo/' + state.tasks._id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    )

      .then(response => response.json())
      .then(response => {
        window.alert('Se eliminó correctamente la tarea ' + response.todo.name)
        dispatch({ type: 'DELETE_TASK', payload: response.todo._id })
      })

  
  }

  return (
    <>
      <div className='task'>
        <table className='table__container'>
          <tbody>
            {state.tasks && state.tasks.map((task) => (
              <tr className='table__content' key={task._id}>
                <td><p>{task.name}</p></td>
                <td><p>{task.description}</p></td>
                <td><p>{task.finishDate}</p></td>
                <td><button onClick={() => dispatch({ type: 'UPDATE_TASK', payload: task })}>EditTask</button></td>
                <td><button onClick={() => handleDelete(task._id)}>DeleteTask</button></td>
                <td><button>TaskPending</button></td>
                <td><button>TaskComplete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <form>
          <p>Name Task:</p>
          <input
            type='text'
            id='nombre'
            name='taskName'
            textLabel='Nombre'
            required
          />
          <p>Description:</p>
          <input
            type='text'
            id='Descripción'
            name='description'
            textLabel='Descripción'
            required
          />
          <p>Finish Data:</p>
          <input
            type='text'
            id='date'
            name='finishDate'
            textLabel='Date:'
            required
          />
          <p>Is Completed:</p>
          <input
            type='text'
            id='completed'
            name='isCompletes'
            textLabel='Completed'
            required
          />
        </form>
      </div>

    </>
  )
}
