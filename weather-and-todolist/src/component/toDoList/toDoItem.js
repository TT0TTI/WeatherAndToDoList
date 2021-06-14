import React from "react";
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ToDoItem = ({ toDoList, onRemove }) => {
  const renderItem = toDoList
    .slice(0)
    .reverse()
    .map((value) => {
      return (
        <CSSTransition key={value.id} timeout={700} classNames="item">
          <ListGroupItem key={value.id} className="list_item">
            {value.toDo}
            <Button onClick={() => onRemove(value.id)}>삭제</Button>
          </ListGroupItem>
        </CSSTransition>
      );
    });

  return (
    <ListGroup>
      <TransitionGroup className="todo-list">{renderItem}</TransitionGroup>
    </ListGroup>
  );
};

export default ToDoItem;
