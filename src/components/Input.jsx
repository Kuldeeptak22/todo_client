import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import {
  addTodoAction,
  getTodosAction,
  updateTodoAction,
} from "../store/slices/Action";

const Input = ({ edit }) => {
  const [useEdit, setUseEdit] = useState(false);
  const [todo, setTodo] = useState({ name: "", description: "" });
  const dispatch = useDispatch();

  const selectFilteredTodos = createSelector(
    (state) => state.todos.todos.data,
    (todos) => todos?.filter((todo) => todo._id === edit)
  );

  const filteredTodos = useSelector(selectFilteredTodos);

  const submitTodo = (event) => {
    event.preventDefault();

    if (todo.name && todo.description) {
      if (edit) {
        dispatch(updateTodoAction({ data: todo, id: edit }));
        setTodo({ name: "", description: "" });
        setUseEdit(false);
        dispatch(getTodosAction());
      } else {
        dispatch(addTodoAction(todo));
        setTodo({ name: "", description: "" });
        dispatch(getTodosAction());
      }
    }
    dispatch(getTodosAction());
  };

  useEffect(() => {
    if (filteredTodos && filteredTodos.length > 0) {
      setTodo(filteredTodos[0]);
    }
  }, [edit]);

  useEffect(() => {
    dispatch(getTodosAction());
  }, [dispatch]);

  useEffect(() => {
    setUseEdit(edit ? true : false);
  }, [edit]);

  return (
    <Container fluid>
      <Row className="bg-gray-700">
        <form onSubmit={submitTodo}>
          <div className="">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-6">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-white text-left"
                  >
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={todo?.name}
                      onChange={(e) =>
                        setTodo({ ...todo, name: e.target.value })
                      }
                      className="block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium leading-6 text-white text-left"
                  >
                    Description
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="description"
                      id="description"
                      required
                      value={todo?.description}
                      onChange={(e) =>
                        setTodo({ ...todo, description: e.target.value })
                      }
                      className="block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                  <button
                    type="submit"
                    className="rounded-md bg-orange-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    {useEdit ? "Update Todo" : "Add Todo"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Row>
    </Container>
  );
};

export default Input;
