export default (state, action) => {
  switch (action.type) {
    case 'LOAD_TODOS':
      return action.todos
    case 'ADD_TODO':
      return [...state, action.todo]
    case 'UPDATE_TODO':
      return state.map((item, i) => {
        if (i === action.index) {
          return (state[i] = action.todo)
        }
        return item
      })
    case 'REMOVE_TODO':
      return state.filter((todo) => todo !== action.todo)
    default:
      break
  }
}
