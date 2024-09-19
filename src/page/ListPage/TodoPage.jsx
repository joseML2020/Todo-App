import { useEffect, useState } from 'react';
import TodoList from '../../component/TodoList';
import TodoInput from '../../component/TodoInput';
import { defaultTodos } from '../../data/data';

export const TodoPage = () => {
  const [todos, setTodos] = useState(defaultTodos);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = { id: 'text-'+Date.now().toString(), text, completed: false };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
  };

  const updateTodo = (id, newText, completed) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, text: newText ?? todo.text, completed: completed ?? todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const reorderTodos = (startIndex, endIndex) => {
    const result = Array.from(todos);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    setTodos(result);
  };

  return (
    <>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} reorderTodos={reorderTodos} />
    </>
  );
};
