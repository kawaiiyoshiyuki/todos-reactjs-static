import React, { Fragment, useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle, faUndo } from '@fortawesome/free-solid-svg-icons';


type FormElem = React.FormEvent<HTMLFormElement>

interface ITodo {
  text: string,
  complete: boolean,
}

const App: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [todos, setTodos] =  useState<ITodo[]>([]);

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    addTodo(value);
    setValue('')
  };

  const addTodo = (text:string): void => {
    const newTodos: ITodo[] = [...todos, {text, complete: false}];
    setTodos(newTodos);
    console.log(newTodos);
  };

  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = [ ...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos)
  };

  const deleteTodo = (index: number) => {
    const newTodos: ITodo[] = [ ...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const getYear = (): number => {
    const d = new Date();
    return d.getFullYear();
  };

  return (
    <Fragment>
      <header className="App-header">
        <h1>Todos</h1>
      </header>
      <section>
        <form onSubmit={handleSubmit}>
          <input type="text" id="todo" placeholder="Add todo" value={value} onChange={e => setValue(e.target.value)} required />
          <label className="sr-only" htmlFor="todo">
            Add todo
          </label>
        </form>
        <div className="truncate _3FI1hze-QUzKxlc1Ou249L">
          Add your todo task above, click to mark a todo as completed
        </div>
        <div id="container">
          {todos?.length > 0 && (
          <ul className="collection">
            {todos.map((todo:ITodo, index: number) => {
              return <Fragment key={index}>
                {/* <div id="container"> */}
                    <li
                      className="collection-item"
                      key={index}
                      style={{ textDecoration: todo.complete ? 'line-through': ''}}
                    >{todo.text}
                    <button className="todo" type='button' onClick={() => completeTodo(index)}>
                      <span>{todo.complete ? <FontAwesomeIcon icon={faUndo} /> : <FontAwesomeIcon icon={faCheckCircle} />}</span>
                    </button>
                      <button className="todo" type='button' onClick={() => deleteTodo(index)}>
                        <span><FontAwesomeIcon icon={faTimesCircle} /></span>
                      </button>
                    </li>
                  </Fragment>
                })}
            </ul>
          )}
          </div>
      </section>
      <footer>&copy; {`zerops ${getYear()}`}</footer>
    </Fragment>
  );
}

export default App;
