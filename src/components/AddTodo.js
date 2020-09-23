import React, { useState, useContext } from 'react'
import TodosContext from '../context/todos-context'

function AddTodo() {
  const [todo, setTodo] = useState('')
  const { dispatch } = useContext(TodosContext)

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: 'ADD_TODO', todo })
    setTodo('')
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="todo"
          placeholder="Add todo item"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="form-input"
        />
        <button className="send-btn">Send</button>
      </form>
    </div>
  )
}

export default AddTodo
