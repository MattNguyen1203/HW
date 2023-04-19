import React, { useContext, useEffect, useState } from "react";
import TodoLayout from "@/layouts/todo";
import TodoContext from "@/context/todo";
import styles from "@/styles/Todo.module.css";
const Active = () => {
  const [activeList, setActiveList] = useState([]);
  const todoContext = useContext(TodoContext);
  useEffect(() => {
    const results = todoContext.todoList.filter(
      (item) => item.status === false
    );
    setActiveList(results);
  }, [todoContext.todoList]);
  return (
    <div>
      {activeList.length !== 0
        ? activeList.map((item, index) => {
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
Active.Layout = TodoLayout;
export default Active;
