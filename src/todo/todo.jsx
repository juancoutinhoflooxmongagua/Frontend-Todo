import React, { Component } from "react";
import axios from 'axios'
import PageHeader from "../template/pageHeader";
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {

    constructor(props){
        super(props)
        this.state = {
            desc: '',
            list: []
        }

        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.refresh()
    }

    handleChange(e) {
        this.setState({ desc: e.target.value });
    }

    handleAdd() {
        const desc = this.state.desc
        axios.post(URL, { desc })
            .then(() => this.refresh())
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(() => this.refresh())
    }

    handleSearch() {
        this.refresh(this.state.desc)
    }

    refresh(desc = '') {
        const search = desc ? `&desc__regex=/${desc}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({ ...this.state, desc, list: resp.data }))
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas'/>
                <TodoForm 
                    desc={this.state.desc}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}
                />
                <TodoList 
                    list={this.state.list}
                    handleRemove={this.handleRemove}
                />
            </div>
        );
    }
}
