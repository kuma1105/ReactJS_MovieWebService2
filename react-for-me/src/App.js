import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => {
    setValue((prev) => prev + 1);
  }

  const [keyword, setKeyword] = useState("");
  const onChange = (event) => {
    setKeyword(event.target.value);
    // console.log(event.target.value);
  }
  // console.log("<App/> render");
  // state가 변화할 때 너의 모든 Component는 다시 실행될 것이다.
  // 특정 코드의 실행을 제한하고 싶다.
  // useEffect(EffectCallback(딱 한 번만 실행하고 싶은 코드), ??? )
  const iRunOnlyOnce = () => {
    console.log("i run only once");
    // console.log("CALL THE API...");
  }
  useEffect(iRunOnlyOnce, []);
  useEffect(() => {
    // if (keyword !== "" && keyword.length > 5) {
    console.log("I run when 'keyword' changes.");
    // console.log("SEARCH FOR", keyword);
    // }
  }, [keyword]); // keyword가 변화할 때만 코드를 실행할거야!

  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]); // counter 변화할 때만 코드를 실행할거야!

  useEffect(() => {
    console.log("I run when keyword & counter change");
  }, [keyword, counter]); // keyword와 counter가 변화할 때만 코드를 실행할거야!

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <h1 className={styles.title}>{counter}</h1>
      {/* <Button onClick={onClick} text={"Continue"} /> */}
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;

// npm install prop-types