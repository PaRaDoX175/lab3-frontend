import { useState } from "react";
import styles from "./EditModal.module.css";

export default function EditModal({ task, onClose, onSave }) {
  const [title, setTitle] = useState(task.title);
  const [date, setDate] = useState(task.date);
  const [category, setCategory] = useState(task.category);
  const [done, setDone] = useState(task.done);

  function submit(e) {
    e.preventDefault();

    onSave({
      ...task,
      title,
      date,
      category,
      done
    });
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <form onSubmit={submit}>
          <input value={title} onChange={e => setTitle(e.target.value)} />
          <input type="date" value={date} onChange={e => setDate(e.target.value)} />
          <input value={category} onChange={e => setCategory(e.target.value)} />

          <label>
            <input type="checkbox" checked={done} onChange={e => setDone(e.target.checked)} />
            Done
          </label>

          <button type="submit">Save</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
}
