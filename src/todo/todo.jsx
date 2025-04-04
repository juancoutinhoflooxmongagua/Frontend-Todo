import React, {Component} from "react";
import PageHeader from "../template/pageHeader";
import TodoForm from './TodoForm'
import TodoList from './TodoList'
export default class Todo extends Component {
    render() {
        return (
            <div>
               <PageHeader name='Tarefas'/>
               <TodoForm />
               <TodoList />
            </div>
        )
    }
}
