import { useState } from "react";

function ListManager() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (inputValue.trim() !== '') {
        setItems([...items, inputValue]);
        setInputValue(''); 
    }
  };

  return (
    <div>
        <h3>ListManager</h3>
        <input 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add item"
        />
        <button onClick={addItem}>add</button>

        <ul>
            {items.map((item, index) => (
            <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
  );
}

export default ListManager;
