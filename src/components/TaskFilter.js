import React from "react";
import { useTasks } from "../context/TaskContext";

const TaskFilter = () => {
  const { filter, setFilter, activeCount, completedCount, taskCount } =
    useTasks();

  return (
    <div className="filter-container">
      <select
        className="filter-select"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">All Tasks</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
      <div className="tasks-count">
        {filter === "all" && `${taskCount} task${taskCount !== 1 ? "s" : ""}`}
        {filter === "active" &&
          `${activeCount} active task${activeCount !== 1 ? "s" : ""}`}
        {filter === "completed" &&
          `${completedCount} completed task${completedCount !== 1 ? "s" : ""}`}
      </div>
    </div>
  );
};

export default TaskFilter;
