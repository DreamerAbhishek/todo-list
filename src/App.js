import React, { useState } from "react";
import { AuthProvider } from "./Middleware/Auth";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddTask from "./components/AddTask";
import LoginForm from "./components/Login";
import { get, set } from "./utils/LocalStorage";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState(get());
  const [isOpen, setIsOpen] = useState(false);
  const [logForm, setLogForm] = useState(false);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    set([...tasks, newTask]);
  };

  const openLogin = () => {
    setLogForm(true);
  };

  const closeLogin = () => {
    setLogForm(false);
  };

  const openFrame = () => {
    setIsOpen(true);
  };

  const closeFrame = () => {
    setIsOpen(false);
  };

  const onEditTask = (updatedTask) => {
    set(updatedTask);
    setTasks(updatedTask);
  };

  const onDeleteTask = (updatedTask) => {
    set(updatedTask);
    setTasks(updatedTask);
  };

  return (
    <AuthProvider>
      <div className="App">
        <Header onOpen={openFrame} loginForm={openLogin} />
        <TodoList
          tasks={tasks}
          onEditTask={onEditTask}
          onDeleteTask={onDeleteTask}
        />
        <AddTask isOpen={isOpen} onClose={closeFrame} onAddTask={addTask} />
        <LoginForm isOpen={logForm} onClose={closeLogin} />
      </div>
    </AuthProvider>
  );
};

export default App;
