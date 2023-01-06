import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState(""); // 절대 state를 toDo="hi" 처럼 직접 수정하지 말 것
  const [toDos, setToDos] = useState([]);

  // 사용자가 input태그에 입력한 값을 실시간으로 toDo변수에 저장함
  const onChange = (event) => {
    setToDo(event.target.value);
  }

  // 'Add To Do' 버튼을 누르면 input태그에 입력한 값을 toDos배열에 추가하고
  // toDo변수를 초기화함
  const onSubmit = (event) => {
    event.preventDefault(); // 기본 이벤트 동작을 금지시킴
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  }
  console.log(toDos);
  // const num = [1,2,3];
  // [1, ...num] -> [1, 1, 2, 3]
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        {/* form 태그는 기본적으로 submit 이벤트를 갖고 있다. */}
        <input onChange={onChange} type="text" value={toDo} placeholder="Write your to do" />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
