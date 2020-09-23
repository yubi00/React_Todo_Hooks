import React, { useContext, useState } from 'react'
import TodosContext from '../context/todos-context'
import '../styles/list.css'

function Todo({ todo, index }) {
  const [updatedTodo, setUpdate] = useState(todo)
  const { dispatch } = useContext(TodosContext)

  const removeTodo = (e) => {
    e.preventDefault()
    dispatch({ type: 'REMOVE_TODO', todo })
  }

  const showUpdate = (e) => {
    e.preventDefault()
    console.log('it works')
    document.getElementById(index).style.display = 'block'
    document.getElementById(todo).style.display = 'none'
  }

  const handleUpdate = (e) => {
    e.preventDefault()

    dispatch({ type: 'UPDATE_TODO', todo: updatedTodo, index })
    document.getElementById(index).style.display = 'none'
    document.getElementById(todo).style.display = 'block'
  }

  return (
    <div className="list-item">
      <h2 className="list-title" onDoubleClick={showUpdate}>
        {' '}
        <strong id={todo}>{todo}</strong>
        <form id={index} style={{ display: 'none' }}>
          <input
            type="text"
            value={updatedTodo}
            onChange={(e) => setUpdate(e.target.value)}
            className="edit-input"
            autoFocus
          />
          <button onClick={handleUpdate} style={{ display: 'none' }}>
            Update
          </button>
        </form>
      </h2>
      <div className="remove-list">
        <button onClick={removeTodo} className="remove-btn">
          X
        </button>
      </div>
    </div>
  )
}

export default Todo
