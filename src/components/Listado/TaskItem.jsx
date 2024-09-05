import {
  CheckIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import styles from "./TaskItem.module.css";
import { useState } from "react";
import { deleteTask, toggleCompleteOf } from "../../reducer/taskReducer";
import { useDispatch } from "react-redux";
import { EditForm } from "../Edit/EditForm";

const TaskItem = ({ tasks }) => {
  const { id, task, completed } = tasks;
  const [isCompleted, setIsCompleted] = useState(completed);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [previousFocusEl, setPreviousFocusEl] = useState(null);
  const [updateTask, setUpdateTask] = useState("");
  const [updateId, setUpdateId] = useState("");

  const handleCompleteboxChange = () => {
    dispatch(toggleCompleteOf(id));
    setIsCompleted(!isCompleted);
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handlerEditTask = () => {
    setUpdateTask(task);
    setUpdateId(id);
    setIsEditing(true);
  };

  return (
    <li className={styles.task}>
      {isEditing && (
        <EditForm
          setIsEditing={setIsEditing}
          previousFocusEl={previousFocusEl}
          updateTask={updateTask}
          setUpdateTask={setUpdateTask}
          updateId={updateId}
        />
      )}
      <div className={styles["task-group"]}>
        <input
          type="checkbox"
          name={task}
          id={id}
          className={styles.checkbox}
          checked={isCompleted}
          onChange={handleCompleteboxChange}
        />
        <label htmlFor={id} className={styles.label}>
          {task}
          <p className={styles.checkmark}>
            <CheckIcon strokeWidth={2} width={24} height={24} />
          </p>
        </label>
      </div>
      <div className={styles["task-group"]}>
        <button
          className="btn"
          onClick={() => {
            handlerEditTask();
          }}
        >
          <PencilSquareIcon width={24} height={24} />
        </button>
        <button
          className={`btn ${styles.delete}`}
          onClick={() => handleDeleteTask(id)}
        >
          <TrashIcon width={24} height={24} />
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
