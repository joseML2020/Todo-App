import { useState } from "react";
import TodoItem from "./TodoItem";
import { List } from "@mui/material";
import PropTypes from "prop-types";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const TodoList = ({ todos, updateTodo, deleteTodo, reorderTodos }) => {
  const [filter, setFilter] = useState('all'); // 'all', 'completed', 'incomplete'

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    reorderTodos(result.source.index, result.destination.index);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true; // 'all'
  });

  const COLORS ={
    incomplete:'bg-red-200',
    completed:'bg-green-200',
    all:'bg-blue-200'
 };

  return (
    <>
      <div className="mb-4 flex gap-2">
        <button
          className={`h-10 px-4 py-2 rounded-md text-white ${filter === 'all' ? 'bg-blue-500' : 'bg-gray-500'}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={`h-10 px-4 py-2 rounded-md text-white ${filter === 'completed' ? 'bg-green-500' : 'bg-gray-500'}`}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
        <button
          className={`h-10 px-4 py-2 rounded-md text-white ${filter === 'incomplete' ? 'bg-red-500' : 'bg-gray-500'}`}
          onClick={() => setFilter('incomplete')}
        >
          Incomplete
        </button>
      </div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="id">
          {(provided) => (
            <List
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="space-y-2"
            >
              {filteredTodos.map((todo, index) => (
                <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`border-2 p-4 rounded-md shadow-md hover:bg-gray-200 transition duration-200 ${COLORS[filter]}`}
                    >
                      <TodoItem
                        todo={todo}
                        updateTodo={updateTodo}
                        deleteTodo={deleteTodo}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  reorderTodos: PropTypes.func.isRequired,
};

export default TodoList;
