import { v4 as uuidv4 } from 'uuid'
import {INPUT_VALUE_CHANGE,
        FORM_SUBMIT,
        COMPLETED_CHECK,
        DELETE_HANDLE,
        FILTER_VALUE_CHANGE_HANDLE,
        FILTER_FUNC,
        SET_TODO_ARR} from './actionType';



const initialState = {
    inputValue : '',
    todoArr : [],
    filterValue : 'all',
    filteredArr : []
}

const reducer = (state = initialState, action) =>{
    const {type, payload} = action

//InputValue Change 
    if(type === INPUT_VALUE_CHANGE){
        return {...state, inputValue : payload}
    }

//filter value change
    if(type === FILTER_VALUE_CHANGE_HANDLE){
        return {...state, filterValue : payload}
    }
//formSubmit
    if(type === FORM_SUBMIT){
        return {...state, todoArr : [...state.todoArr, {id : uuidv4(), text : state.inputValue, completed : false}], inputValue : '' }
    }
//Checks for completed fro not
    if(type === COMPLETED_CHECK){
        const tempTodoArr = state.todoArr.map(todo =>{
            if(todo.id === payload){
                return {...todo, completed : !todo.completed}
            }
            return todo;
        })
        return {...state, todoArr : [...tempTodoArr]}
    }

// Deleting the Todo
    if(type === DELETE_HANDLE){
        const tempTodoArr = state.todoArr.filter(todo => todo.id !== payload);
        return {...state, todoArr : [...tempTodoArr]}
    }

//filtering the func
    if(type === FILTER_FUNC){

        switch(state.filterValue){
            case 'completed' : 
                const tempTodo = state.todoArr.filter(todo => todo.completed === true)
                return {...state, filteredArr : [...tempTodo]}
            break;

            case 'uncompleted' : 
                const temp = state.todoArr.filter(todo => todo.completed === false)
                return {...state, filteredArr : [...temp]}
            break;
            default : return {...state, filteredArr : [...state.todoArr]}
        }
    }

    if(type === SET_TODO_ARR){
        return{
            ...state,
            todoArr : [...payload]
        }
    }
    return state;
}

export default reducer;