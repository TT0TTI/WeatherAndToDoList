import React from "react";
import DataNull from "../dataNull";
import ToDoItem from "./toDoItem";

const ToDoList = ({ toDoList, onRemove }) => {
  return (
    <div className="mt-3">
      {toDoList.length === 0 ? (
        <DataNull data="toDoList" />
      ) : (
        <ToDoItem toDoList={toDoList} onRemove={onRemove} />
      )}
    </div>
  );
};

export default ToDoList;
