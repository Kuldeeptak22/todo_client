import { createSlice } from "@reduxjs/toolkit";
import {
  addTodoAction,
  getTodosAction,
  deleteTodoAction,
  updateTodoAction,
} from "./Action";

const initialState = {
  todos: [],
  todo: {},
  isLoading: false,
  success: null,
  error: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addTodoAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addTodoAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todo = action.payload;
      })
      .addCase(addTodoAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getTodosAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTodosAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todos = action.payload;
      })
      .addCase(getTodosAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteTodoAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTodoAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = action.payload;
      })
      .addCase(deleteTodoAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateTodoAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateTodoAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todo = action.payload;
      })
      .addCase(updateTodoAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default todoSlice.reducer;
