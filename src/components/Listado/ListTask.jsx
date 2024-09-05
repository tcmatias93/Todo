import { useSelector } from "react-redux";
import styles from "./ListTask.module.css";
import TaskItem from "./TaskItem";

const ListTask = () => {
  const list = useSelector((state) => state.task);

  console.log("list: ", list);
  if (list.length === 0) {
    return null;
  }

  return (
    <ul className={styles.tasks}>
      {list.map((task, id) => (
        <TaskItem key={id} tasks={task} />
      ))}
    </ul>
  );
};

export default ListTask;
