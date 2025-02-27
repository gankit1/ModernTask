import React, { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [filter, setFilter] = useState("all");

  const addTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text,
        completed: false,
        createdAt: new Date().toISOString(),
      },
    ]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = () => {
    switch (filter) {
      case "active":
        return tasks.filter((task) => !task.completed);
      case "completed":
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  };

  const value = {
    tasks,
    filteredTasks: filteredTasks(),
    filter,
    addTask,
    deleteTask,
    toggleComplete,
    setFilter,
    taskCount: tasks.length,
    activeCount: tasks.filter((task) => !task.completed).length,
    completedCount: tasks.filter((task) => task.completed).length,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
