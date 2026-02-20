import styles from "./ThemeSwitcher.module.css";

function ThemeSwitcher({ darkTheme, setDarkTheme }) {
  return (
    <button
      className={styles.button}
      onClick={() => setDarkTheme(!darkTheme)}
    >
      Theme: {darkTheme ? "Dark" : "Light"}
    </button>
  );
}

export default ThemeSwitcher;
