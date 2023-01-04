import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => {
    setValue((prev) => prev + 1);
  }
  console.log("<App/> render");
  // state가 변화할 때 너의 모든 Component는 다시 실행될 것이다.
  // 특정 코드의 실행을 제한하고 싶다.
  // useEffect(EffectCallback(딱 한 번만 실행하고 싶은 코드), ??? )
  const iRunOnlyOnce = () => {
    console.log("i run only once");
    console.log("CALL THE API...");
  }
  useEffect(iRunOnlyOnce, []);
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