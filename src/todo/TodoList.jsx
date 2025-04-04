import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'

const TodoList = props => {
  const renderRows = () => {
    return props.list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? 'text-decoration-line-through text-muted' : ''}>
          {todo.desc}
        </td>
        <td>
          <span className={`badge ${todo.done ? 'bg-success' : 'bg-warning'} me-2`}>
            {todo.done ? 'Concluída' : 'Pendente'}
          </span>
          {!todo.done && (
            <button 
              onClick={() => props.handleMarkAsDone(todo)} 
              className="btn btn-success btn-sm m-1"
            >
              <FontAwesomeIcon icon={faCheck} />
            </button>
          )}
          <button 
            onClick={() => props.handleRemove(todo)} 
            className="btn btn-danger btn-sm m-1"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <button 
            onClick={() => props.handleEdit(todo)} 
            className="btn btn-warning btn-sm m-1"
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
        </td>
      </tr>
    ))
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}

export default TodoList
