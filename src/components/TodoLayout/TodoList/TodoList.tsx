import Todo from '../Todo';
import { ITodo } from '../types';

interface ITodosProps {
    todos: ITodo[],
    handleComplete(index: number): void,
    handleDelete(index: number): void,
}

const TodoList = (
    {todos, handleComplete, handleDelete }: ITodosProps
) => (
    <div id="container">
        {todos?.length > 0 && (
            <ul className="collection">
            {todos.map((todo: ITodo, index: number) => (
                <Todo
                    key={`${+index}_${todo.text}`}
                    todo={todo}
                    index={index}
                    handleComplete={handleComplete}
                    handleDelete={handleDelete}
                />
            ))}
        </ul>
        )}
    </div>
);

export default TodoList;
