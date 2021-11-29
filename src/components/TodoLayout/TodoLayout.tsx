import React, { useState } from 'react';
import Instructions from './Instructions/Instructions';
import TodoInput from './TodoInput/TodoInput';
import TodoList from './TodoList/TodoList';


type FormElem = React.FormEvent<HTMLFormElement>

interface ITodo {
  text: string,
  complete: boolean,
}

const initState = [
  { text: 'Fork repository', complete: false },
  { text: 'Open build and deploy settings and connect', complete: false },
  { text: 'Push a new commit', complete: false },
];

const TodoLayout = () => {
    const [value, setValue] = useState<string>('');
    const [todos, setTodos] =  useState<ITodo[]>(initState);

    const addTodo = (text:string): void => {
      const newTodos: ITodo[] = [...todos, {text, complete: false}];
      setTodos(newTodos);
      console.log(newTodos);
    };

    const handleSubmit = (e: FormElem): void => {
      e.preventDefault();
      addTodo(value);
      setValue('')
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

    return (
      <section>
        <TodoInput handleSubmit={handleSubmit} value={value} setValue={setValue} />
          <Instructions />
          <TodoList todos={todos} handleComplete={completeTodo} handleDelete={deleteTodo} />
      </section>
    );
}

export default TodoLayout;
