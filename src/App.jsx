import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import TaskForm from "./components/TaskForm/TaskForm";
import Filters from "./components/Filters/Filters";
import TaskList from "./components/TaskList/TaskList";
import EditModal from "./components/EditModal/EditModal";
import Counter from "./components/Counter/Counter";
import ListManager from "./components/ListManager/ListManager";
import TogglePanel from "./components/TogglePanel/TogglePanel";
import ProfileEditor from "./components/ProfileEditor/ProfileEditor";
import ButtonInteractive from "./components/ButtonInteractive/ButtonInteractive";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import DataFetcher from "./components/DataFetcher/DataFetcher";
import Timer from "./components/Timer/Timer";
import WindowSize from "./components/WindowSize/WindowSize";

import styles from "./App.module.css";

export default function App() {

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [editTask, setEditTask] = useState(null);
  const [exitingIds, setExitingIds] = useState([]);

  const [dark, setDark] = useState(true);
  useEffect(() => {
    document.body.className = dark ? "dark" : "light";
  }, [dark]);

  const [filterStatus, setFilterStatus] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");
  const [sortType, setSortType] = useState("date");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(task) {
    const newTask = {
      id: Date.now(),
      title: task.title,
      date: task.date,
      category: task.category || "General",
      done: false,
    };
    setTasks(prev => [...prev, newTask]);
  }

  function deleteTask(id) {
    setExitingIds(prev => [...prev, id]);
    setTimeout(() => {
      setTasks(prev => prev.filter(t => t.id !== id));
      setExitingIds(prev => prev.filter(i => i !== id));
    }, 300);
  }

  function toggleDone(id) {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, done: !t.done } : t
    ));
  }

  function saveEdit(updated) {
    setTasks(tasks.map(t =>
      t.id === updated.id ? updated : t
    ));
    setEditTask(null);
  }

  let visibleTasks = [...tasks];

  if (filterStatus === "done") {
    visibleTasks = visibleTasks.filter(t => t.done);
  }
  if (filterStatus === "active") {
    visibleTasks = visibleTasks.filter(t => !t.done);
  }

  if (filterCategory !== "all") {
    visibleTasks = visibleTasks.filter(t => t.category === filterCategory);
  }

  if (sortType === "date") {
    visibleTasks.sort((a, b) => new Date(a.date) - new Date(b.date));
  }
  if (sortType === "alpha") {
    visibleTasks.sort((a, b) => a.title.localeCompare(b.title));
  }

  const total = tasks.length;
  const doneCount = tasks.filter(t => t.done).length;

  return (
    <div className={`${styles.page} ${dark ? styles.dark : styles.light}`}>
      <Counter />
      <ListManager />
      <TogglePanel />
      <ProfileEditor />
      <ButtonInteractive />
      <DataFetcher />
      <Timer start={30}/>
      <WindowSize />
      <Header total={total} done={doneCount} />
      <ThemeSwitcher darkTheme={dark} setDarkTheme={setDark} />

      <div className={styles.card}>
        <TaskForm onAdd={addTask} />
      </div>

      <div className={styles.card}>
        <Filters
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
          sortType={sortType}
          setSortType={setSortType}
          tasks={tasks}
        />

        <TaskList
          tasks={visibleTasks}
          onDelete={deleteTask}
          onToggle={toggleDone}
          onEdit={setEditTask}
          exitingIds={exitingIds}
        />
      </div>

      {editTask && (
        <EditModal
          task={editTask}
          onClose={() => setEditTask(null)}
          onSave={saveEdit}
        />
      )}
    </div>
  );
}
