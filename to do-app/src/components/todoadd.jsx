import { useState } from "react";

const TodoAdd = ({ onNewitem }) => {
  const [TodoName, setTodoName] = useState("");

  const [TodoDate, setTodoDate] = useState("");

  //method

  const HandlenameChange = (event) => {
    setTodoName(event.target.value);
  };

  const HandleDateChange = (event) => {
    setTodoDate(event.target.value);
  };

  const HandleAddbuttonclicked = () => {
    onNewitem(TodoName, TodoDate);

    setTodoName("");
    setTodoDate("");
  };
  return (
    <div className="appcontainer">
      <div className="row kg-row">
        <div className="col-4">
          <input 
            type="text"
            placeholder="Enter todo here......." value={TodoName}
            onChange={HandlenameChange}
          ></input>
        </div>
        <div className="col-2">
          <input type="date" value={TodoDate} onChange={HandleDateChange}></input>
        </div>
        <div className="col-2">
          <button
            type="button "
            className="btn btn-success kg-button"
            onClick={HandleAddbuttonclicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
export default TodoAdd;
