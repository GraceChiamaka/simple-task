import React, {memo, useContext} from "react";
import { AppContext } from "../../context/AppContext";
import TodoItem from "./TodoItem";

const TodosList = () => {
  const { todos} = useContext(AppContext);
    console.log(todos, 'post updats')
    return (
      <>
        <div className="task-view">
           {todos.map(todo => !todo.completed&&(
              <TodoItem
                key={todo.id}
                todo={todo}
              />
            ))}
        </div>
       

        <div className="">
          <h2>Completed Tasks</h2>
          {todos.map(todo => todo.completed && (
            <TodoItem
              key={todo.id}
              todo={todo}
            />
          ))}
        </div>
      </>
    );
}

export default memo(TodosList);
