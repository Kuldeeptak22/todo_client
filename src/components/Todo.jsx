import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Input from "./Input";
import TodoList from "./TodoList";

const Todo = () => {
  return (
    <Container className="bg-black py-4 flex justify-center items-center h-[100vh]">
      <Row className="flex justify-center items-center mx-3">
        <Col sm={12}>
           <h2 className="text-white">My Todos</h2> 
        </Col>
        <Col sm={12}>
            <Input/>
        </Col>
        <Col sm={12}>
            <TodoList/>
        </Col>
      </Row>
    </Container>
  );
};

export default Todo;
