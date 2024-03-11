import React from "react";
import Task from "./Task";
import "../scss/TodoList.scss";

const TodoList = ({ tasks, onEditTask, onDeleteTask }) => {
  const onEditedTask = (editForm) => {
    const updatedTasks = tasks.map((task) =>
      task.id === editForm.id
        ? { ...task, title: editForm.title, description: editForm.description }
        : task
    );
    onEditTask(updatedTasks);
  };

  const onDeletedTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    onDeleteTask(updatedTasks);
  };

  return (
    <div className="todoList">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onEdit={onEditedTask}
            onDelete={onDeletedTask}
          />
        ))
      ) : (
        <p>You have no tasks. Add New.</p>
      )}
    </div>
  );
};

export default TodoList;
