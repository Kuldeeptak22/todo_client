import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodoAction, getTodosAction } from "../store/slices/Action";
import { FaRegEdit } from "react-icons/fa";

const TodoList = () => {
  const [completedTodos, setCompletedTodos] = useState([]);
  const todos = useSelector((state) => state.todos.todos.data);
  const { success } = useSelector((state) => state?.todos);
  console.log("todosList", todos);

  const dispatch = useDispatch();

  useEffect(() => {
    if (success) {
      dispatch(getTodosAction());
    }
  }, [success, dispatch]);

  useEffect(() => {
    dispatch(getTodosAction());
  }, [dispatch]);

  const completeTask = (id) => {
    setCompletedTodos([...completedTodos, id]);
  };
  const deleteTask = (id) => {
    dispatch(deleteTodoAction(id));
  };
  const editTodo = (id) => {
    console.log(id);
    // dispatch(deleteTodoAction(id));
  };

  return (
    <Container className="overflow-auto">
      {todos &&
        todos.map((todo) => (
          <Row
            key={todo?._id}
            className="bg-gray-700 my-3 flex justify-between items-center"
          >
            <Col className="text-left">
              {completedTodos.includes(todo._id) ? (
                <>
                  <s className="text-[1.5rem] text-gray-400 py-2">
                    {todo?.name}
                  </s>
                  <br />
                  <s className="text-gray-400 py-3">{todo?.description}</s>
                </>
              ) : (
                <>
                  <p className="text-[1.5rem] text-orange-400">{todo?.name}</p>
                  <p className="text-white">{todo?.description}</p>
                </>
              )}
            </Col>
            <Col className="flex justify-end items-center">
              {completedTodos.includes(todo._id) ? (
                <>
                  <Button disabled className="bg-transparent">
                    <FaRegEdit className="text-white text-xl" />
                  </Button>

                  <Button
                    className="mx-1"
                    variant="success"
                    disabled
                    onClick={() => completeTask(todo?._id)}
                  >
                    Complete
                  </Button>
                  <Button
                    disabled
                    variant="danger"
                    onClick={() => deleteTask(todo?._id)}
                  >
                    Delete
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    className="bg-transparent edit"
                    onClick={() => editTodo(todo._id)}
                  >
                    <FaRegEdit className="text-white text-2xl" />
                  </Button>
                  <Button
                    className="mx-1"
                    variant="success"
                    onClick={() => completeTask(todo?._id)}
                  >
                    Complete
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => deleteTask(todo?._id)}
                  >
                    Delete
                  </Button>
                </>
              )}
            </Col>
          </Row>
        ))}
    </Container>
  );
};

export default TodoList;
