import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import './styles.css';
import { useState } from "react";

interface ITodoProps {
    todo: {
      id: string;
      title: string;
      done: boolean;
    };
    deleteTodo: (id: string) => void;
    doneTodo: (id: string, done: boolean) => void;
    updateTodo: (id: string, done: boolean) => void;
  }
  
  export const TodoItem = ({ todo, deleteTodo, doneTodo, updateTodo }: ITodoProps) => {
    const handleDelete = () => deleteTodo(todo.id);
    const handleComplete = () => doneTodo(todo.id, !todo.done);
  
    const [isChecked, setIsChecked] = useState(todo.done);
  
    const handleCheckboxChange = () => {
      const newChecked = !isChecked;
      setIsChecked(newChecked);
      updateTodo(todo.id, newChecked);
    };
  
    return (
      <li className={`list-group-item d-flex align-items-center`}>
        <div className="form-check flex-grow-1">
          <input className="form-check-input" type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
          <label className={`form-check-label ${isChecked ? 'text-muted' : ''} ${todo.done ? 'text-decoration-line-through' : ''}`}>
            {todo.title}
          </label>
        </div>
        <div className="d-flex">
          <button style={{ marginRight: '10px' }} className="btn btn-primary">
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button onClick={handleDelete} className="btn btn-danger ml-2">
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </li>
    );
  };