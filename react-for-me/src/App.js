import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => {
    setValue((prev) => prev + 1);
  }
  console.log("<App/> render");
  // state가 변화할 때 너의 모든 Component는 다시 실행될 것이다.
  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
      {/* <Button onClick={onClick} text={"Continue"} /> */}
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;

// npm install prop-types