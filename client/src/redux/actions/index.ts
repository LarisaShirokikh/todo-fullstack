import { ITodoActionTypes } from "../../types/types"

export const createTodo = (payload: string) => {
    return {
        type: ITodoActionTypes.CREATE_TODO,
        payload
    }
}

export const deleteTodo = (payload: string) => {
    return {
        type: ITodoActionTypes.DELETE_TODO,
        payload
    }
}

export const getTodos = () => {
    return {
        type: ITodoActionTypes.GET_TODOS
    }
}

export const completeTodo = (id: string, done: boolean) => {
    return {
        type: ITodoActionTypes.COMPLETE_TODO,
        payload: {
            id,
            done
        }
    }
}

export const updateTodoAction = (id: string, done: boolean) => {
    return {
        type: ITodoActionTypes.UPDATE_TODO,
        payload: {
            id,
            done
        }
    }
}