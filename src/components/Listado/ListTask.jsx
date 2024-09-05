import { useSelector } from "react-redux";

const ListTask = () => {
  const list = useSelector((state) => state.task);

  console.log("list: ", list);

  return (
    <div>
      <ul>
        {list.map((task, id) => (
          <li key={id}>{task.task}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListTask;
