import { useEffect, useState } from "react";

function WindowSize() {
    const [size, setSize] = useState({
        w: window.innerWidth,
        h: window.innerHeight,
    });

    useEffect(() => {
        function handleResize() {
            setSize({ w: window.innerWidth, h: window.innerHeight });
        }

        window.addEventListener("resize", handleResize);

    }, []);

    return (
        <p>
        Window: {size.w} x {size.h}
        </p>
    );
}

export default WindowSize;
