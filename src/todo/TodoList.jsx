import React from 'react'

const TodoList = props => {
  const renderRows = () => {
    return props.list.map(todo => (
      <tr key={todo._id}>
        <td>{todo.desc}</td>
        <button>Editar</button>
        <button>Excluir</button>
      </tr>
    ))
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}

export default TodoList
