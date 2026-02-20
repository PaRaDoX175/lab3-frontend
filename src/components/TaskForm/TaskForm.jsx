import { useState } from "react";
import styles from "./TaskForm.module.css";

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");

  function submit(e) {
    e.preventDefault();
    if (!title) return;

    onAdd({ title, date, category });
    setTitle("");
    setDate("");
    setCategory("");
  }

  return (
    <form className={styles.form} onSubmit={submit}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Task" />
      <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      <input value={category} onChange={e => setCategory(e.target.value)} placeholder="Category" />
      <button type="submit">Add</button>
    </form>
  );
}
