import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState([
    { id: "1", text: "Something write me", completed: true },
    { id: "2", text: "Hello, My name is Shohjahon", completed: false },
  ]);

  const addTodo = (enteredText) => {
    setTodo((prev) => {
      const updatedArray = [...prev];
      updatedArray.unshift({
        text: enteredText,
        id: Math.random().toString(),
        completed: false,
      });
      return updatedArray;
    });
  };

  const deleteItem = (id) => {
    setTodo((prev) => {
      const filteredItem = prev.filter((item) => item.id != id);
      return filteredItem;
    });
  };

  const editItem = (id, text) => {
    setTodo(
      todo.map((item) => {
        if (item.id === id) {
          return { ...item, text };
        }
        return item;
      })
    );
  };

  const completeTodoHandler = (id) => {
    setTodo(
      todo.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  return (
    <div className="App ">
      <Header />
      <Form onAdd={addTodo} />
      <TodoList
        items={todo}
        onDeleteItem={deleteItem}
        onCompleted={completeTodoHandler}
        onEditItem={editItem}
      />
    </div>
  );
}

export default App;
