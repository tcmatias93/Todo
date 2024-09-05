import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../reducer/taskReducer";
import { PlusIcon } from "@heroicons/react/24/solid";

const FormAdd = () => {
  const [newrTask, setNewTask] = useState("");
  const dispatch = useDispatch();

  const addNewTask = (event) => {
    event.preventDefault();

    dispatch(addTask(newrTask));
    setNewTask("");
  };

  return (
    <form onSubmit={addNewTask} className="todo">
      <div className="wrapper">
        <input
          type="text"
          className="input"
          value={newrTask}
          onChange={(e) => setNewTask(e.target.value)}
          required
          autoFocus
          maxLength={100}
          placeholder="Enter Task"
        />
        <label className="label" htmlFor="task">
          New task
        </label>
      </div>
      <button type="submit" className="btn">
        <PlusIcon />
      </button>
    </form>
  );
};

export default FormAdd;
