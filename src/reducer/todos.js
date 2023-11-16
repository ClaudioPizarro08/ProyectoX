export const initialState = {
  user: null
}

export function reducer (state, action) {
  switch (action.type) {
    case 'LOGIN_USER':
      globalThis.localStorage.setItem('USER', JSON.stringify(action.payload))
      return { ...state, user: action.payload }
    case 'LOGOUT':
      return { ...state, user: null }
    case 'LOAD_TASKS':
      return { ...state, tasks: action.payload }
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] }
    case 'UPDATE_TASK':
      return { ...state, taskToUpdate: action.payload }
    case 'DELETE_TASK':
      return { ...state, tasks: state.tasks.filter(task => task._id !== action.payload) }
    default:
      return state
  }
}
