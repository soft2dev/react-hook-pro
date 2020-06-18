import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeInput, insert, toggleCheck, remove } from "../modules/todos";
import TodoList from "../components/TodoList";

const TodoListContainer = () => {
  const { input, todos } = useSelector((state) => state.todos, []);

  const dispatch = useDispatch();
  const onChangeInput = (value)=> dispatch( changeInput(value) )
  const onInsert = (input)=> dispatch( insert(input) )
  const onToggle = (id)=> dispatch( toggleCheck(id) )
  const onRemove = (id)=> dispatch( remove(id) )

  const onChange = useCallback(
    (e) => {
      onChangeInput(e.target.value);
    },
    [onChangeInput]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onInsert(input);
      onChangeInput("");
    },
    [input, onChangeInput, onInsert]
  );

  return (
    <TodoList
      input={input}
      todos={todos}
      onChange={onChange}
      onSubmit={onSubmit}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

export default TodoListContainer;
