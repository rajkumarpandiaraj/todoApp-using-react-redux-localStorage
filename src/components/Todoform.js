import React,{useEffect} from 'react';
import {BsFillPlusSquareFill} from 'react-icons/bs';
import {connect} from 'react-redux';
import { inputChangeHandle,
    formSubmitHandle,
    filterValueChangeHandle,
    filterFuncHandle, setTodoArr} from '../redux/actionCreators';

function Todoform(props) {
    const {inputValue,
        filterValue,
        todoArr,
        filterValueChangeHandle,
        inputChangeHandle,
        formSubmitHandle,
        filterFuncHandle,
        setTodoArr} = props;

        const saveLocalTodos = () =>{
            localStorage.setItem("todos", JSON.stringify(todoArr));
        };
        const getLocalTodos = () =>{
            if(localStorage.getItem('todos') === null){
                localStorage.setItem('todos', JSON.stringify([]));
            } else{
                const local = JSON.parse(localStorage.getItem('todos'));
                setTodoArr(local);
            }
        }

        useEffect(() => {
            getLocalTodos();
            
        }, [])

        useEffect(() => {
            filterFuncHandle();
            saveLocalTodos();
        }, [filterFuncHandle,filterValue, todoArr])

    return (
        <>
        <form onSubmit={(e) => {e.preventDefault(); return formSubmitHandle()}}>
            <input type="text" value={inputValue} onChange={inputChangeHandle}  className="todo-input" />
            <button className="todo-button" type="submit">
                <BsFillPlusSquareFill size='1.8rem'/>
            </button>
        <div className="select">
            <select name="todos" value={filterValue}  onChange={filterValueChangeHandle}className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
        </form>

        </>
    )
}

const mapStateToProps = (state) =>{
    return{
        inputValue : state.inputValue,
        filterValue : state.filterValue,
        todoArr : state.todoArr
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        inputChangeHandle : (e) => dispatch(inputChangeHandle(e)),
        filterValueChangeHandle : (e) => dispatch(filterValueChangeHandle(e)),
        formSubmitHandle : () => dispatch(formSubmitHandle()),
        filterFuncHandle : () => dispatch(filterFuncHandle()),
        setTodoArr : (local) => dispatch(setTodoArr(local))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Todoform);
