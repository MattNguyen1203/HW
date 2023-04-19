import React, { useEffect } from "react";
import { useState } from "react";
import styles from "@/styles/Todo.module.css";
import Link from "next/link";
import TodoContext from "@/context/todo";

const TodoLayout = (props) => {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState({
    id: "",
    todoName: "",
    status: false,
  });

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     setTodoList(JSON.parse(localStorage.getItem("list")));
  //   }
  // }, []);
  // useEffect(() => {
  //   if (todoList.length !== 0)
  //     localStorage.setItem("list", JSON.stringify(todoList));
  // }, [JSON.stringify(todoList)]);

  const handleInputValue = (e) => {
    setInputValue((prev) => {
      return {
        ...prev,
        todoName: e.target.value,
        id: e.target.value,
      };
    });
  };

  const handleTodoList = (e) => {
    e.preventDefault();
    setTodoList((prev) => [...prev, { ...inputValue }]);
    setInputValue({ todoName: "", status: false, id: "" });
  };

  const handleChangeStatus = (id) => {
    setTodoList((prev) => {
      const newData = prev.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      );
      return newData;
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todoList,
        setTodoList: handleTodoList,
        changeStatus: handleChangeStatus,
      }}
    >
      <div className={styles.container_app}>
        <form onSubmit={handleTodoList}>
          <input
            type="text"
            name="todoItem"
            value={inputValue.todoName}
            onChange={handleInputValue}
          />
          <button>ADD</button>
        </form>
        <div className={styles.tab_nav}>
          <ul>
            <li>
              <Link href={"/todo/all"}>All</Link>
            </li>
            <li>
              <Link href={"/todo/active"}>Active</Link>
            </li>
            <li>
              <Link href={"/todo/completed"}>Completed</Link>
            </li>
          </ul>
        </div>
        <div className={styles.show_todo_list}>{props.children}</div>
      </div>
    </TodoContext.Provider>
  );
};

export default TodoLayout;
