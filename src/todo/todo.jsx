import React, { Component } from "react";
import axios from 'axios';
import PageHeader from "../template/pageHeader";
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const URL = 'http://localhost:3003/api/todos';

export default class Todo extends Component {
  state = {
    desc: '',
    list: []
  };

  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
    this.refresh();
  }

  handleChange(e) {
    this.setState({ ...this.state, desc: e.target.value });
  }

  refresh(desc = '') {
    const search = desc ? `&desc=${desc}` : '';
    axios.get(`${URL}?sort=-createdAt${search}`)
      .then(resp => this.setState({ ...this.state, desc, list: resp.data }));
  }

  handleAdd() {
    const desc = this.state.desc;
    axios.post(URL, { desc }).then(() => this.refresh());
  }

  handleSearch() {
    this.refresh(this.state.desc);
  }

  handleClear() {
    this.refresh();
  }

  handleRemove(todo) {
    axios.delete(`${URL}/${todo._id}`).then(() => this.refresh(this.state.desc));
  }

  handleMarkAsDone(todo) {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then(() => this.refresh(this.state.desc));
  }

  handleMarkAsPending(todo) {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then(() => this.refresh(this.state.desc));
  }

  render() {
    return (
      <div>
        <PageHeader name='Tarefas' />
        <TodoForm 
          desc={this.state.desc}
          handleChange={this.handleChange}
          handleAdd={this.handleAdd}
          handleSearch={this.handleSearch}
          handleClear={this.handleClear}
        />
        <TodoList 
          list={this.state.list}
          handleRemove={this.handleRemove}
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarkAsPending={this.handleMarkAsPending}
        />
      </div>
    );
  }
}
