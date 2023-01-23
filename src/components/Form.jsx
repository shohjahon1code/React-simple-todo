import React, { useState } from "react";
import Button from "./Button";

function Form(props) {
  const [value, setValue] = useState("");
  const inputChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (value.trim().length === 0) {
      return;
    }
    props.onAdd(value);
    setValue("");
  };


  return (
    <form
      onSubmit={formSubmit}
      className="form from-control d-flex justify-content-center align-items-end gap-2 "
    >
      <input
        value={value}
        onChange={inputChangeHandler}
        type="text"
        className="form-control w-50 mt-5 ms-5"
      />
      <Button type="submit" className="h-100">
        Add To do
      </Button>
    </form>
  );
}

export default Form;
