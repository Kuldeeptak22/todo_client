import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const TodoList = () => {
  const [complete, setComplete] = useState(false);
  const completeTask = () => {
    setComplete(true);
  };
  const deleteTask = () => {
    console.log("delete task");
  };
  return (
    <Container>
      <Row className="bg-gray-700 my-3 flex justify-between items-center">
        <Col className="text-left">
          {complete ? (
            <>
              <s className="text-[1.5rem] text-gray-400 py-2">Task 1</s>
              <br />
              <s className="text-gray-400 py-3">This is first Task</s>
            </>
          ) : (
            <>
              <p className="text-[1.5rem] text-orange-400">Task 1</p>
              <p className="text-white">This is first Task</p>
            </>
          )}
        </Col>
        <Col className="">
          <Button
            className="mx-1"
            variant="success"
            onClick={() => completeTask()}
          >
            Complete
          </Button>
          <Button variant="danger" onClick={() => deleteTask()}>
            Delete
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default TodoList;
