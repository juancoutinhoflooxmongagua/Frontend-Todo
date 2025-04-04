import React, { Component } from "react";
import PageHeader from "../template/pageHeader";
import TodoForm from './TodoForm';
import TodoList from './TodoList';
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
        console.log('Tarefa adicionada:', this.state.desc);
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
