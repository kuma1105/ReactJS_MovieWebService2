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
  useEffect(iRunOnlyOnce, []); // [], 지켜볼 변화하는 대상이 없음
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

  // 5-4
  const [showing, setShowing] = useState(false);
  const onClick2 = () => {
    setShowing((prev) => !prev)
  }

  function Hello() {
    function hiFn() {
      console.log("created :)");
      return byeFn; // Hello() 컴포넌트가 파괴될 때 실행된다.
    }
    function byeFn() {
      console.log("destroyed :(");
    }
    useEffect(hiFn
      // // Cleanup function
      // // 컴포넌트가 destroy될 때 뭔가 할 수 있게 해줌
      // return () => {
      //   console.log("destroyed :(");
      // }
      , [])

    // 

    useEffect(function () {
      console.log("hi :)");
      return function () {
        console.log("bye :(");
      }
    }, [])

    //

    useEffect(() => {
      console.log("hi :)");
      return () => console.log("bye :(");
    }, [])

    return (
      <h1>Hello</h1>
    )
  }


  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <h1 className={styles.title}>{counter}</h1>
      {/* <Button onClick={onClick} text={"Continue"} /> */}
      <button onClick={onClick}>click me</button>
      {showing ? <Hello /> : null}
      <button onClick={onClick2}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;

// npm install prop-types

// ReactJS는 state를 변화시킬 때 component를 재실행시킴