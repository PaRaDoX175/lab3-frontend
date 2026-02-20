import { useState } from "react";
import styles from "./ButtonInteractive.module.css";

function ButtonInteractive() {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <button
      className={`
        ${styles.btn}
        ${hover ? styles.hover : ""}
        ${active ? styles.active : ""}
      `}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
    >
      Click Me
    </button>
  );
}

export default ButtonInteractive;