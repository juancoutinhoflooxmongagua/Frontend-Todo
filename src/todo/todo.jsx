import React, { Component } from "react";
import axios from 'axios'
import PageHeader from "../template/pageHeader";
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const URL = 'http://localhost:3003/api/todos'
export default class Todo extends Component {

    constructor(props){
        super(props)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    state = {
        desc: ''
    }

    handleChange(e) {
        this.setState({ desc: e.target.value });
    }

    handleAdd() {
        axios.post(URL, { desc: this.state.desc })
        this.setState({ desc: '' })
    }
    

    render() {
        return (
            <div>
                <PageHeader name='Tarefas'/>
                <TodoForm 
                    desc={this.state.desc}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                />
                <TodoList />
            </div>
        );
    }
}
