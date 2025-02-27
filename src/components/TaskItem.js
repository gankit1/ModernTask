import React from "react";
import { FaTrash } from "react-icons/fa";
import { useTasks } from "../context/TaskContext";

const TaskItem = ({ task }) => {
  const { toggleComplete, deleteTask } = useTasks();

  return (
    <li className="task-item">
      <input
        type="checkbox"
        className="task-checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      <span className={`task-text ${task.completed ? "task-completed" : ""}`}>
        {task.text}
      </span>
      <button
        className="task-delete"
        onClick={() => deleteTask(task.id)}
        aria-label="Delete task"
      >
        <FaTrash />
      </button>
    </li>
  );
};

export default TaskItem;
