import {INPUT_VALUE_CHANGE,
        FORM_SUBMIT,
        COMPLETED_CHECK,
        DELETE_HANDLE,
        FILTER_VALUE_CHANGE_HANDLE,
        FILTER_FUNC,
        SET_TODO_ARR} from './actionType';


//InputChangeHandler
    const inputChangeHandle = (e) =>{
        return {
            type : INPUT_VALUE_CHANGE,
            payload : e.target.value
        }
    }

//filtervalue change
    const filterValueChangeHandle = (e) =>{
        return {
            type : FILTER_VALUE_CHANGE_HANDLE,
            payload : e.target.value
        }
    }

//FormSubmit
    const formSubmitHandle = () =>{
        return {
            type : FORM_SUBMIT
        }
    }

//check for Completed or not
    const completedCheckHandle = (id) =>{
        return {
            type : COMPLETED_CHECK,
            payload : id
        }
    }

//Delete Handler
    const deleteHandle = (id) =>{
        return {
            type : DELETE_HANDLE,
            payload : id
        }
    }
    const filterFuncHandle = () =>{
        return {
            type : FILTER_FUNC,
        }
    }

    const setTodoArr = (local) =>{
        return {
            type : SET_TODO_ARR,
            payload : local
        }
    }


export {inputChangeHandle,filterValueChangeHandle, filterFuncHandle, setTodoArr, formSubmitHandle, completedCheckHandle, deleteHandle}