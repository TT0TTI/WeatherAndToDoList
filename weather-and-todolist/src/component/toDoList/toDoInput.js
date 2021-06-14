import React from "react";
import { TiWeatherSunny } from "react-icons/ti";
import { Link } from "react-router-dom";
import { Button, Form, Input, InputGroup, InputGroupAddon } from "reactstrap";

const ToDoInput = ({ onSubmit, onChange, toDos, InputRef }) => {
  return (
    <Form onSubmit={onSubmit} style={{ display: "flex", alignItems: "center" }}>
      <Link
        to="/Weather"
        className="btn btn-primary"
        style={{ display: "flex", alignItems: "center" }}
      >
        <TiWeatherSunny fontSize="30px" color="white" />
      </Link>
      <InputGroup className="ml-3">
        <Input
          placeholder="할일을 적어 봅시다"
          value={toDos}
          type="text"
          bsSize="lg"
          onChange={onChange}
          ref={InputRef}
        />
        <InputGroupAddon addonType="append">
          <Button color="secondary" outline style={{ fontWeight: "bold" }}>
            입력
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </Form>
  );
};

export default ToDoInput;
