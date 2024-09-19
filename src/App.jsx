import { useEffect, useState } from 'react'
import './App.css'
import { Container, Typography } from '@mui/material';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const updateTodo = (id, newText, completed) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText ?? todo.text, completed: completed ?? todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const reorderTodos = (startIndex, endIndex) => {
    const result = Array.from(todos);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    setTodos(result);
  };

  console.log(todos)
  return (
    <Container className='border-2 border place-content-center my-20 shadow-xl p-6'>
      <Typography variant="h3" align="center" gutterBottom className='mt-2'>
        TODO List
      </Typography>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} reorderTodos={reorderTodos} />
    </Container>
  );
};


export default App;
