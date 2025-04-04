import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch, faClose } from '@fortawesome/free-solid-svg-icons';

export default props => {
  const keyHandler = (e) => {
    if (e.key === 'Enter') {
      e.shiftKey ? props.handleSearch() : props.handleAdd();
    } else if (e.key === 'Escape') {
      props.handleClear();
    }
  }

  return (
    <div role="form" className="row g-2">
      <div className="col-9">
        <input 
          id="desc" 
          className="form-control"
          placeholder="Adicione uma tarefa"
          onChange={props.handleChange}
          onKeyUp={keyHandler}
          value={props.desc}
        />
      </div>
      <div className="col-auto">
        <button className="btn btn-primary" onClick={props.handleAdd}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <button className="btn btn-info ms-1" onClick={props.handleSearch}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <button className="btn btn-secondary ms-1" onClick={props.handleClear}>
          <FontAwesomeIcon icon={faClose} />
        </button>
      </div>
    </div>
  );
}
