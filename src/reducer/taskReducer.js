import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "",
    task: "casa",
  },
  {
    id: "",
    task: "limpiar",
  },
  {
    id: "",
    task: "ordenar",
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
        id: "",
        task: contetn,
      });
    },
  },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
