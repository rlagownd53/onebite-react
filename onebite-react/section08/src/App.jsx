import "./App.css";
import { useState, useRef } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Editor from "./components/Editor";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "React 공부하기2",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "React 공부하기3",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([newTodo, ...todos]);
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List />
    </div>
  );
}

export default App;
