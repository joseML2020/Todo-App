import { useState } from "react";
import { IconButton, TextField, Typography } from "@mui/material";
import { Edit, Delete, Check, Close } from "@mui/icons-material";
import PropTypes from "prop-types";

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleUpdate = () => {
    updateTodo(todo.id, newText);
    setIsEditing(false);
  };

  const handleComplete = () => {
    updateTodo(todo.id, todo.text, true);
  };

  const handleUncomplete = () => {
    updateTodo(todo.id, todo.text, false);
  };

  return (
    <div className="flex items-center rounded ">
      {isEditing ? (
        <TextField
          variant="outlined"
          fullWidth
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onBlur={handleUpdate}
          className="mr-2"
        />
      ) : (
        <Typography
          variant="body1"
          className={`flex-grow place-items-center items-center ${todo.completed ? 'line-through' : ''}`}
        >
          {todo.text}
        </Typography>
      )}
      {!isEditing && (
        <>
          <IconButton onClick={handleComplete} disabled={todo.completed}>
            <Check color={todo.completed ? "primary" : "disabled"} />
          </IconButton>
          <IconButton onClick={handleUncomplete} disabled={!todo.completed}>
            <Close color={!todo.completed ? "primary" : "disabled"} />
          </IconButton>
        </>
      )}
      <IconButton onClick={() => setIsEditing(!isEditing)}>
        <Edit />
      </IconButton>
      <IconButton onClick={() => deleteTodo(todo.id)}>
        <Delete />
      </IconButton>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;
