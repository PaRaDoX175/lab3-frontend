import styles from "./Header.module.css";

export default function Header({ total, done }) {
  return (
    <div className={styles.header}>
      <h1>Task Tracker</h1>
      <p>Total: {total} | Done: {done}</p>
    </div>
  );
}
