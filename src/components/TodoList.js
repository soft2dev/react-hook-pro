import React from "react";

const TodoItem = React.memo(({ todo, onRemove, onToggle }) => {
  const { id, text, done } = todo;
  return (
      <li style={{
          textDecoration: done ? 'line-through' : 'none'
      }}>
          <span onClick={()=> onToggle(id)}>{text}</span>{' '}
          <button onClick={() => onRemove(id)}>Remove</button>
      </li>
  );
});

const TodoItems = React.memo(({ todos, onRemove, onToggle }) => {
  return todos.map((todo) => (
    <TodoItem
      todo={todo}
      key={todo.id}
      onRemove={onRemove}
      onToggle={onToggle}
    />
  ));
});

const TodoList = ({ todos, input, onRemove, onToggle, onChange, onSubmit }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={input} />
        <button type="submit">Add</button>
      </form>
      <ul>
        <TodoItems todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </ul>
    </div>
  );
};

export default TodoList;