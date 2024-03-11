import React, { useState } from "react";
import "../scss/AddTask.scss";

const AddTask = ({ isOpen, onClose, onAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreateTask = () => {
    const newTask = { title, description, id: Date.now() };
    onAddTask(newTask);
    onClose();
  };

  return (
    <div className={`addTask ${isOpen ? "open" : ""}`}>
      <div className="addTaskFrame">
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleCreateTask}>Create</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default AddTask;
