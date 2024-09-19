import { useState } from "react";
import { TextField, Button } from "@mui/material";
import PropTypes from "prop-types";

const TodoInput = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleAdd = () => {
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <>
    <div style={{ display: "flex", marginBottom: "20px" }}>
      <TextField
        label="Nueva tarea"
        variant="outlined"
        fullWidth
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleAdd} style={{ marginLeft: "10px" }}>
        Añadir
      </Button>
    </div>
    </>
  );
};

TodoInput.propTypes = {
    addTodo: PropTypes.func.isRequired,
  };
  

export default TodoInput;
