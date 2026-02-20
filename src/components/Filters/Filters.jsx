import styles from "./Filters.module.css";

export default function Filters({
  filterStatus,
  setFilterStatus,
  filterCategory,
  setFilterCategory,
  sortType,
  setSortType,
  tasks
}) {

  const categories = [...new Set(tasks.map(t => t.category))];

  return (
    <div className={styles.filters}>
      <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="done">Done</option>
      </select>

      <select value={filterCategory} onChange={e => setFilterCategory(e.target.value)}>
        <option value="all">All categories</option>
        {categories.map(c => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      <select value={sortType} onChange={e => setSortType(e.target.value)}>
        <option value="date">Sort by date</option>
        <option value="alpha">Sort alphabetically</option>
      </select>
    </div>
  );
}
