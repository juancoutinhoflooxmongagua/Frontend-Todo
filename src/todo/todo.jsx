import React, { Component } from "react";
import PageHeader from "../template/pageHeader";
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default class Todo extends Component {

    constructor(props){
        super()
        this.handleAdd = this.handleAdd.bind(this)
    }
    state = {
        description: ''
    }

    handleChange = (e) => {
        this.setState({ description: e.target.value });
    }

    handleAdd = () => {
        console.log('Tarefa adicionada:', this.state.description);
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas'/>
                <TodoForm 
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                />
                <TodoList />
            </div>
        );
    }
}
