import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ITodo } from "../../types/types";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import './styles.css';

interface ITodoProps {
    todo: ITodo;
}

export const TodoItem = ({ todo }: ITodoProps) => {
    return (
        <li className="list-group-item d-flex align-items-center">

            <div className="form-check flex-grow-1">
                <input className="form-check-input" type="checkbox" value="" />
                <label className="form-check-label" >{todo.title}</label>
            </div>

            <div className="d-flex">
                <button style={{ marginRight: '10px' }} 
                className='btn btn-primary'>
                        <FontAwesomeIcon icon={faEdit} />
                    
                </button>
                <button className='btn btn-danger ml-2'>
                        <FontAwesomeIcon icon={faTrash} />
                    
                </button>
            </div>
        </li>

    )
}
