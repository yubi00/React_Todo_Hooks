import React, { useContext } from 'react'
import TodosContext from '../context/todos-context'
import Todo from './Todo'
import '../styles/list.css'

function TodoList({ removeTodo }) {
  const { todos } = useContext(TodosContext)

  return (
    <div className="lists">
      {todos.length !== 0 ? (
        todos.map((todo, i) => <Todo key={i} todo={todo} index={i} />)
      ) : (
        <h3 className="no-todo">No todos yet</h3>
      )}
    </div>
  )
}

export default TodoList
