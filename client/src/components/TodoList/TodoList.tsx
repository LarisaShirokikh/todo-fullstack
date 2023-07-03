import { useDispatch, useSelector } from "react-redux"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { ITodoReducer } from "../../types/types"
import { TodoItem } from "../TodoItem/TodoItem"
import { completeTodo, deleteTodo, updateTodoAction } from "../../redux/actions"
import './styles.css'

export const TodoList = () => {
    const state = useSelector((state: ITodoReducer) => state.todoReducer)
    const dispatch = useDispatch()

    const removeTodo = (id: string) => {
        dispatch(deleteTodo(id))
    }

    const doneTodo = (id: string, done: boolean) => {
        dispatch(completeTodo(id, done))
    }

    const updateSingleTodo = (id: string, done: boolean) => {
        dispatch(updateTodoAction(id, done))
    }
    return (
        <TransitionGroup component='ul' className='list-group'>
            {state.todos.map(todo => (
                <CSSTransition
                    timeout={800}
                    classNames={'todo'}
                    key={todo.id}
                >
                    <TodoItem todo={todo}
                        deleteTodo={removeTodo}
                        doneTodo={doneTodo}
                        updateTodo={updateSingleTodo}
                    />
                </CSSTransition>
            ))}
        </TransitionGroup>
    )
}