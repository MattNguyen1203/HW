import React, { useContext, useEffect, useState } from "react";
import TodoLayout from "@/layouts/todo";
import TodoContext from "@/context/todo";
import styles from "@/styles/Todo.module.css";
const Completed = () => {
  const [completedList, setCompletedList] = useState([]);
  const todoContext = useContext(TodoContext);
  useEffect(() => {
    const results = todoContext.todoList.filter((item) => item.status === true);
    setCompletedList(results);
  }, [todoContext.todoList]);
  return (
    <div>
      {completedList.length !== 0
        ? completedList.map((item, index) => {
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
Completed.Layout = TodoLayout;
export default Completed;
