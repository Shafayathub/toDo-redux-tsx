import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};
const toDoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});

export default toDoSlice.reducer;
