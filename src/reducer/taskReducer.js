import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    task: "casa",
    completed: true,
  },
  {
    id: "2",
    task: "limpiar",
    completed: false,
  },
  {
    id: "3",
    task: "ordenar",
    completed: true,
  },
];

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask(state, action) {
      const contetn = action.payload;
      console.log("contetn: ", contetn);
      state.push({
        id: "4",
        task: contetn,
        completed: false,
      });
    },
  },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
