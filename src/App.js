import "antd/dist/antd.min.css";
import classes from "./css/styles.module.css";

import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  //TODO: Teste de endpoint

  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    axios
      .get("https://wger.de/api/v2/exercise/")
      .then(res => {
        setExercises(res.data.results);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div className={classes["app"]}>
      <ul>
        {exercises.map(ex => {
          return <li key={ex.id}>{ex.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
