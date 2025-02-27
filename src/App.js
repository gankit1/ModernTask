import React from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <div className="task-container">
          <TaskForm />
          <TaskFilter />
          <TaskList />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
