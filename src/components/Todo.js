import React from 'react';
import Todoform from './Todoform';
import Todolist from './Todolist';


function Todo() {
    return (
        <div>
            <header>
                <h1>Todo List</h1>
            </header>
            <Todoform />
            <Todolist />
        </div>
    )
}

export default Todo
