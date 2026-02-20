import TaskCard from "../TaskCard/TaskCard.jsx";
import styles from "./TaskList.module.css";

export default function TaskList({ tasks, onDelete, onToggle, onEdit, exitingIds }) {
  if (tasks.length === 0) return <p>No tasks</p>;

  return (
    <div className={styles.list}>
      {tasks.map(task => (
        <TaskCard
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
          isExiting={exitingIds.includes(task.id)}
        />
      ))}
    </div>
  );
}