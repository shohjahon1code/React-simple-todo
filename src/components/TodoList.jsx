import React from "react";
import Todoitem from "./Todoitem";

export default function TodoList(props) {
  return (
    <ul className="list-group mt-3">
      {props.items.map((item) => (
        <Todoitem
          item={item}
          key={item.id}
          id={item.id}
          onDeleteItem={props.onDeleteItem}
          onComplete={props.onCompleted}
          onEdit={props.onEditItem}
        >
          {item.text}
        </Todoitem>
      ))}
    </ul>
  );
}
