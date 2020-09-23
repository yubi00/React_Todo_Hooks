import React, { useEffect, useReducer } from 'react'
import todosReducer from '../reducers/todos'
import TodosContext from '../context/todos-context'
import '../App.css'
import TodoList from './TodoList'
import AddTodo from './AddTodo'

import '../styles/form.css'

function App() {
  const [todos, dispatch] = useReducer(todosReducer, [])

  useEffect(() => {
    const parsedTodos = JSON.parse(localStorage.getItem('todos'))
    if (parsedTodos) {
      dispatch({ type: 'LOAD_TODOS', todos: parsedTodos })
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      <div className="App">
        <h1 className="app-title">Yubi TodoList</h1>
        <AddTodo />
        <TodoList />
      </div>
    </TodosContext.Provider>
  )
}

export default App
