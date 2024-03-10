import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  serial: 1,
  task: "",
  status: false,
};
const toDoSlice = createSlice({
  name: "toDo",
  initialState,
  reducers: {},
});
