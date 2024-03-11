import React, { useState } from "react";
import { AuthContext } from "../Middleware/Auth";
import "../scss/Task.scss";

const Task = ({ task, onEdit, onDelete }) => {
  const [isFrameOpen, setIsFrameOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editForm, setEditForm] = useState({
    title: task.title,
    description: task.description,
    id: task.id,
  });
  const { isLoggedIn } = React.useContext(AuthContext);

  const handleView = () => {
    setIsFrameOpen(true);
  };

  const handleEdit = () => {
    if (isLoggedIn) {
      setIsEdit(true);
      setIsFrameOpen(true);
    }
  };

  const handleChange = (e) => {
    let name = e.target.name;
    setEditForm((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const handleSave = () => {
    onEdit(editForm);
    setIsEdit(false);
  };

  const handleDelete = () => {
    onDelete(task.id);
    setIsFrameOpen(false);
  };

  const handleClose = () => {
    setIsFrameOpen(false);
    setIsEdit(false);
  };

  return (
    <div className="task">
      <span>{task.title}</span>
      <div>
        <button onClick={handleView}>View</button>
        {isLoggedIn && (
          <>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </>
        )}
      </div>

      {isFrameOpen && (
        <div className="taskFrame">
          <div className="content">
            {isEdit ? (
              <>
                <label>Title:</label>
                <input
                  type="text"
                  value={editForm.title}
                  name="title"
                  onChange={(e) => handleChange(e)}
                />
                <label>Description:</label>
                <textarea
                  value={editForm.description}
                  name="description"
                  onChange={(e) => handleChange(e)}
                />
                <button onClick={handleSave}>Save</button>
              </>
            ) : (
              <>
                <h2>{task.title}</h2>
                <p>{task.description}</p>
              </>
            )}
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Task;
