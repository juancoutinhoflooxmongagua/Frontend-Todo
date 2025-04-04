import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import React from 'react'
import Todo from '../todo/todo'
import About from '../about/about' 
import Menu from '../template/menu'
export default _props => {
    return (
        <div className='container'>
            <Menu></Menu>
            <Todo />
            <About />
        </div>
    );
}
