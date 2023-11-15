import React, { useContext, useEffect } from 'react'
import { initialState } from '../../reducer/todos'

export const DashboardPage = () => {
  const { state, dispatch } = useContext(TaskContext, initialState)

  useEffect(() => {
    fetch('https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/todo?userId=}')
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
            {state.tasks.map((task) => (
              <tr className='table__content' key={task.id}>
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

    </>
  )
}
