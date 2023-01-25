import React from "react";
import Button from "./Button";

export default function Todoitem(props) {
  const deleteItem = () => {
    props.onDeleteItem(props.id);
  };

  const completed = () => {
    props.onComplete(props.id);
  };

  const editItem = () => {
    props.onEdit(props.id, prompt(""));
  };

  return (
    <li className="list-group-item w-100 m-auto text-start d-flex justify-content-between">
      <p
        style={{
          textDecoration: props.item.completed ? "line-through" : "none",
        }}
      >
        {props.children}
      </p>
      <div className="d-flex gap-1">
        <Button className="btn btn-primary" onClick={completed}>
          {props.item.completed ? "InComplete" : "Complete"}
        </Button>
        <Button className="btn btn-info" onClick={editItem}>
          edit
        </Button>
        <Button className="btn btn-danger" onClick={deleteItem}>
          delete
        </Button>
      </div>
    </li>
  );
}
