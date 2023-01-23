import React from "react";

export default function Todoitem(props) {
  const deleteItem = () => {
    props.onDeleteItem(props.id);
  };
  return (
    <li onClick={deleteItem} className="list-group-item w-50 m-auto text-start">
      {props.children}
    </li>
  );
}
