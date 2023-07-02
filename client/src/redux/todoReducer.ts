import { ITodoAction, ITodoActionTypes, ITodoState } from "../types/types"

export const initialState = {
    todos: []
}

export const todoReducer = (state: ITodoState = initialState, action: ITodoAction) => {
    switch (action.type) {
        case ITodoActionTypes.GET_TODOS_SUCCESS:
            return { ...state, todos: action.payload }
        case ITodoActionTypes.CREATE_TODO_SUCCESS:
            return { todos: [...state.todos, action.payload] }
        case ITodoActionTypes.DELETE_TODO_SUCCESS:
            return { ...state, todos: state.todos.filter(t => t.id !== action.payload) }

        case ITodoActionTypes.COMPLETE_TODO_SUCCESS: {
            const newTodos = [...state.todos]
            const completeIndex = newTodos.findIndex(t => t.id === action.payload)
            if (completeIndex === -1) {
                return state
            }
            newTodos[completeIndex].done = !newTodos[completeIndex].done
            return { ...state, todos: newTodos }
        }

        default:
            return state;

    }
}