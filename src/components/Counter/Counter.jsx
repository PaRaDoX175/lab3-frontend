import { useState } from "react";
import styles from "./Counter.module.css";

function Counter() {
    const [count, setCount] = useState(0);

    function increase() {
        setCount(count + 1);
    }

    function decrease() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <div className= {styles.counter}>
            <h3>Counter: {count}</h3>
            <button onClick={decrease}>–</button>
            <button onClick={increase}>+</button>
        </div>
    );
}

export default Counter;
