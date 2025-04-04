import React from 'react'

const TodoForm = props => (
    <div role='form' className='row my-3'>
      
        <div className="col-9">
            <input 
                type="text" 
                id='desc' 
                placeholder='Adicionar tarefa...' 
                className="form-control"
            /> 
        </div>

        <div className="col-3 d-flex justify-content-end">
            <button onClick={props.handleAdd} className="btn btn-primary">
                <i className="fa fa-plus"></i> Adicionar
            </button>
        </div>
    </div>
)

export default TodoForm
