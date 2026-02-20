import { useEffect, useState } from "react";

function DataFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData(["Task 1", "Task 2", "Task 3"]);
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div>
      <h3>DataFetcher</h3>
      {loading ? <p>Loading...</p> : <ul>{data.map((x) => <li>{x}</li>)}</ul>}
    </div>
  );
}

export default DataFetcher;
