import './App.css'
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/hello")
      .then((res) => res.text())
      .then((data) => setMessage(data));
  }, []);

  return (
    <>
      <h1>TODO App</h1>
      <p>{message}</p>
    </>
  );
}

export default App
