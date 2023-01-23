import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Form from "./components/Form";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState([
    { id: "1", text: "Something write me" },
    { id: "2", text: "Hello, My name is Shohjahon" },
  ]);

  const addTodo = (enteredText) => {
    setTodo((prev) => {
      const updatedArray = [...prev];
      updatedArray.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedArray;
    });
  };

  const deleteItem = (id) => {
    setTodo((prev) => {
      const filteredItem = prev.filter((item) => item.id != id);
      return filteredItem;
    });
  };

  return (
    <div className="App ">
      <Header />
      <Form onAdd={addTodo} />
      <TodoList items={todo} onDeleteItem={deleteItem} />
    </div>
  );
}

export default App;
