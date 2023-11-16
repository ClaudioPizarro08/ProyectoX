import React, { useContext, useEffect } from 'react'
import { TaskContext } from '../../context/task'

export const DashboardPage = () => {
  const { state, dispatch } = useContext(TaskContext)

  useEffect(() => {
    console.log(state)
    fetch(`https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/todo?userId=${state.user._id}`)
      .then((response) => response.json())
      .then((response) => {
        dispatch({ type: 'LOAD_TASKS', payload: response.todos })
        console.log(state)
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

    </>
  )
}
