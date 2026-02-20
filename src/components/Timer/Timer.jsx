import { useEffect, useState } from "react";

function Timer({ start }) {
    const [time, setTime] = useState(start);

    useEffect(() => {
        const interval = setInterval(() => {
        setTime((t) => {
            if (t <= 0) {
                clearInterval(interval); 
                return 0;
            }
            return t - 1;
        });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return <h3>Time: {time}</h3>;

}

export default Timer;