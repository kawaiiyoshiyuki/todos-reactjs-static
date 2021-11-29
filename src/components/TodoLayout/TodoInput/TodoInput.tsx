const TodoInput = ({ handleSubmit, value, setValue }: any) => (
        <form onSubmit={handleSubmit}>
            <input type="text" id="todo" placeholder="Add a todo here ..." value={value} onChange={e => setValue(e.target.value)} required />
            <label className="sr-only" htmlFor="todo">
                Add todo
            </label>
        </form>
);

export default TodoInput;
