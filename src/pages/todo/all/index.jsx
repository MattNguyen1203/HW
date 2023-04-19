import React, { useContext } from "react";
import TodoLayout from "@/layouts/todo";
import TodoContext from "@/context/todo";
import styles from "@/styles/Todo.module.css";
const All = () => {
  const todoContext = useContext(TodoContext);

  return (
    <div>
      {todoContext.todoList.length !== 0
        ? todoContext.todoList.map((item, index) => {
            return (
              <div className={styles.item} key={index}>
                <input
                  type="checkbox"
                  onChange={() => todoContext.changeStatus(item.id)}
                  checked={item.status}
                />
                <span>{item.todoName}</span>
              </div>
            );
          })
        : "Nothing"}
    </div>
  );
};
All.Layout = TodoLayout;
export default All;
