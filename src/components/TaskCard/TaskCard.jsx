import styles from "./TaskCard.module.css";

export default function TaskCard({ task, onDelete, onToggle, onEdit, isExiting }) {
  return (
    <div className={`${styles.card} ${isExiting ? styles.exiting : styles.entering}`}>
      <div>
        <h3 style={{ textDecoration: task.done ? "line-through" : "none" }}>
          {task.title}
        </h3>
        <p>{task.date}</p>
        <p>{task.category}</p>
      </div>

      <div className={styles.buttons}>
        <button onClick={() => onToggle(task.id)}>
          {task.done ? "Undo" : "Done"}
        </button>
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
}
