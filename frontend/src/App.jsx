import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios
      .get("/api/details")
      .then((response) => {
        setDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h1>Lets goooooo</h1>
      <p>Jokes: {details.length}</p>

      {details.map((detail, index) => (
        <div key={detail.id}>
          <h2>{detail.title}</h2>
          <h3>{detail.content}</h3>
        </div>
      ))}
    </>
  );
}

export default App;
