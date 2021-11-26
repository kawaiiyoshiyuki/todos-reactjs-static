import React, { Fragment } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle, faUndo } from '@fortawesome/free-solid-svg-icons';
import { ITodo } from '../types';

interface ITodoProps {
    index: number,
    todo: ITodo,
    handleComplete(index: number): void,
    handleDelete(index: number): void,
}

const Todo = ({ index, todo, handleComplete, handleDelete }: ITodoProps) => (
    <>
        <li
            key={`${todo?.text}_${+index}`}
            className="collection-item"
            style={{ textDecoration: todo.complete ? 'line-through': ''}}
        >
            {todo.text}
            <button key="complete" className="todo" type='button' onClick={() => handleComplete(index)}>
                <span>{todo.complete ? <FontAwesomeIcon icon={faUndo} /> : <FontAwesomeIcon icon={faCheckCircle} />}</span>
            </button>
            <button key="delete" className="todo" type='button' onClick={() => handleDelete(index)}>
                <span><FontAwesomeIcon icon={faTimesCircle} /></span>
            </button>
        </li>
    </>
);

export default Todo;
