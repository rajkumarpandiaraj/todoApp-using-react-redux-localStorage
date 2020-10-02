import React from 'react'
import Todoitem from './TodoItem';
import {connect} from 'react-redux';

function Todolist(props) {
    const {filteredArr} = props;
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {
                    filteredArr.map(todo => <Todoitem key={todo.id} todo={todo}/>)
                }
            </ul>
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        todoArr : state.todoArr,
        filteredArr :state.filteredArr
    }
}

export default connect(mapStateToProps)(Todolist)
