import { createSlice } from "@reduxjs/toolkit";
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
  },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
