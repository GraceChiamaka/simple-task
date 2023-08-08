import React from "react";
import TodosList from "./TodosList";
import { Header, InputTodo } from "../General";

const TodoContainer = () => {

  return (
    <div className="container">
      <Header />
      <InputTodo />
      <TodosList />
    </div>
  );
}
export default TodoContainer;
