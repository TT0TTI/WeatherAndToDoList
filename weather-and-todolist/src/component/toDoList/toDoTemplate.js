import React, { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "reactstrap";
import ToDoInput from "./toDoInput";
import ToDoList from "./toDoList";
import "./toDo.css";

const ToDoTemplate = () => {
  const [toDoList, setToDoList] = useState(
    () => JSON.parse(localStorage.getItem("toDos")) || []
  );
  const [toDos, setToDos] = useState("");
  const InputRef = useRef(null);
  const IDRef = useRef(1);

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDoList));
  }, [toDoList]);

  const onChange = useCallback((e) => {
    const { value } = e.target;
    setToDos(value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const toDoItem = {
        id: IDRef.current,
        toDo: toDos,
      };
      if (toDos !== "") {
        setToDoList(toDoList.concat(toDoItem));
        setToDos("");
        InputRef.current.focus();
        IDRef.current += 1;
      } else {
        InputRef.current.focus();
      }
    },
    [toDos, toDoList]
  );

  const onRemove = (id) => {
    const newToDoList = toDoList.filter((toDoItem) => {
      return toDoItem.id !== id;
    });
    return setToDoList(newToDoList);
  };

  return (
    <Container>
      <ToDoInput
        InputRef={InputRef}
        toDos={toDos}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <ToDoList onRemove={onRemove} toDoList={toDoList} />
    </Container>
  );
};

export default ToDoTemplate;
