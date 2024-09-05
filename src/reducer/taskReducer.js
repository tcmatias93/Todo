import { createSlice, current } from "@reduxjs/toolkit";
import { getTask, setTask } from "../utils/localStorage";

const initialState = getTask("task") || [];

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask(state, action) {
      const contetn = action.payload;
      const updatedTasks = [...state, contetn];
      setTask("task", updatedTasks);
      return updatedTasks;
    },
    deleteTask(state, action) {
      const id = action.payload;
      const newArrayTasks = state.filter((task) => task.id != id);
      setTask("task", (state = newArrayTasks));
      return (state = newArrayTasks);
    },
    toggleCompleteOf(state, action) {
      const id = action.payload;
      const taskToChange = state.find((n) => n.id === id);

      const changedTask = {
        ...taskToChange,
        completed: !taskToChange.completed,
      };

      let newArrayTask = state.map((task) =>
        task.id !== id ? task : changedTask
      );

      setTask("task", newArrayTask);
      return newArrayTask;
    },
    taskEdit(state, action) {
      const { updateId, updateTask } = action.payload;
      console.log(action);
      const taskToChange = state.find((n) => n.id === updateId);

      const changedTask = {
        ...taskToChange,
        task: updateTask,
        completed: false,
      };
      let newArrayTask = state.map((task) =>
        task.id !== updateId ? task : changedTask
      );

      setTask("task", newArrayTask);
      return newArrayTask;
    },
  },
});

export const { addTask, deleteTask, toggleCompleteOf, taskEdit } =
  taskSlice.actions;
export default taskSlice.reducer;
