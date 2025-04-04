import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'

const TodoList = props => {
  const renderRows = () => {
    return props.list.map(todo => (
      <tr key={todo._id}>
        <td>{todo.desc}</td>
        <td>
          <button className="btn btn-warning m-1">
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button className="btn btn-danger m-1">
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <button className="btn btn-success m-1">
            <FontAwesomeIcon icon={faCheck} />
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
