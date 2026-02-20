import { useState } from "react";

function TogglePanel() {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);

  return (
    <div>
      <h3>Toggle Panel</h3>

      <button onClick={() => setOne(!one)}>
        Switch 1: {one ? "Включен" : "Выключен"}
      </button>

      <button onClick={() => setTwo(!two)}>
        Switch 2: {two ? "Включен" : "Выключен"}
      </button>

      <button onClick={() => setThree(!three)}>
        Switch 3: {three ? "Включен" : "Выключен"}
      </button>
    </div>
  );
}

export default TogglePanel;
