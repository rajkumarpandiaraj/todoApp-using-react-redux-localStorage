import React from 'react';
import {BiCheck} from 'react-icons/bi';
import {FaTrashAlt} from 'react-icons/fa';
import {connect} from 'react-redux';
import {completedCheckHandle,deleteHandle} from '../redux/actionCreators'

function TodoItem(props) {
    const {todo, completedCheckHandle, deleteHandle} = props;
    return (
        <div className='todo'>
            <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                {todo.text}
            </li>
            <button className='complete-btn' onClick={() => completedCheckHandle(todo.id)}>
                <BiCheck color='white' size='2rem'/>
            </button>
            <button className='trash-btn' onClick={() => deleteHandle(todo.id)}>
                <FaTrashAlt color='white' size='2rem'/>
            </button>
        </div>
    )
}
const mapDispatchToProps = (dispatch) =>{
    return {
        completedCheckHandle : (id) => dispatch(completedCheckHandle(id)),
        deleteHandle : (id) => dispatch(deleteHandle(id)),
    }
}
export default connect(null, mapDispatchToProps)(TodoItem)
