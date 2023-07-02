import { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ITodoReducer } from '../../types/types'
import { createTodo } from '../../redux/actions'

export const TodoForm = () => {
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (!title.trim()) {
            return
        }

      
        dispatch(createTodo(title))
        setTitle('')
    }

    const handleUpdateInputValue = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }
    return (
        <form onSubmit={handleSubmit} className='mb-3 d-flex align-items-end justify-content-between'>
            <div className="form-group mb-3" style={{ width: '92%', marginRight: '10px' }}>
                <label htmlFor="" className='form-label'>Todos</label>
                <div className="input-group">
                    <input
                        onChange={handleUpdateInputValue}
                        type='text'
                        className='form-control '
                        placeholder='Enter todo here'

                    />
                    <button className='btn btn-primary'>Submit</button>
                </div>
            </div>
        </form>
    )
}
