import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../reducer/taskReducer";

const FormAdd = () => {
  const [newrTask, setNewTask] = useState("");
  const dispatch = useDispatch();

  const addNewTask = (event) => {
    event.preventDefault();

    dispatch(addTask(newrTask));
    setNewTask("");
  };

  return (
    <div>
      <h1>My task list</h1>
      <form onSubmit={addNewTask}>
        <label>New task </label>
        <input
          type="text"
          value={newrTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default FormAdd;
