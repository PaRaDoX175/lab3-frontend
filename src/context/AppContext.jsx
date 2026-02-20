import { createContext, useEffect, useState } from "react";

export const AppContext = createContext(null);

export function AppProvider({ children }) {
  // tasks
  const [tasks, setTasks] = useState([]);

  // ui/state for tasks page
  const [editTask, setEditTask] = useState(null);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");
  const [sortType, setSortType] = useState("date");

  // localStorage load
  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  // localStorage save
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask({ title, date, category }) {
    const newTask = {
      id: Date.now(),
      title: title.trim(),
      date,
      category: category?.trim() || "General",
      done: false,
    };
    setTasks((prev) => [...prev, newTask]);
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  function toggleDone(id) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }

  function saveEdit(updated) {
    setTasks((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
    setEditTask(null);
  }

  // categories list (for select)
  const categories = ["all", ...new Set(tasks.map((t) => t.category))];

  // simple stats
  const total = tasks.length;
  const doneCount = tasks.filter((t) => t.done).length;

  const value = {
    // tasks data
    tasks,
    categories,
    total,
    doneCount,

    // actions
    addTask,
    deleteTask,
    toggleDone,
    saveEdit,

    // ui state
    editTask,
    setEditTask,

    filterStatus,
    setFilterStatus,
    filterCategory,
    setFilterCategory,
    sortType,
    setSortType,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}