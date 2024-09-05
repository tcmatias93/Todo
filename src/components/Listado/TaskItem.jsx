import {
  CheckIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import styles from "./TaskItem.module.css";
import { useState } from "react";

const TaskItem = ({ task }) => {
  const [isCompleted, setIsCompleted] = useState(task.completed);

  const handleCompleteboxChange = () => {
    setIsCompleted(!isCompleted);
  };
  return (
    <li className={styles.task}>
      <div className={styles["task-group"]}>
        <input
          type="checkbox"
          name={task.task}
          id={task.id}
          className={styles.checkbox}
          checked={isCompleted}
          onChange={handleCompleteboxChange}
        />
        <label htmlFor={task.id} className={styles.label}>
          {task.task}
          <p className={styles.checkmark}>
            <CheckIcon strokeWidth={2} width={24} height={24} />
          </p>
        </label>
      </div>
      <div className={styles["task-group"]}>
        <button className="btn">
          <PencilSquareIcon width={24} height={24} />
        </button>
        <button className={`btn ${styles.delete}`}>
          <TrashIcon width={24} height={24} />
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
