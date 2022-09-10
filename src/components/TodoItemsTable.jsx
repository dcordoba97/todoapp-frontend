import React, { useEffect, useState } from "react";
import styles from "./TodoItemsTable.module.css";
import axios from "axios";
import UpdateTodoModal from "./Modal/UpdateTodoModal";

const border = {
  border: "1px solid black",
  height: "70px",
  padding: "2px",
};

function TodoItemsTable() {
  const [todoItems, setTodoItems] = useState([]);
  const [updateIsOpen, setUpdateIsOpen] = useState(false);
  const url = "http://localhost:9090/api/todoItems";

  useEffect(() => {
    const fetchTodoItems = async () => {
      const getAllTodoItems = () => axios.get(url);
      const result = await getAllTodoItems();
      setTodoItems(result.data);
    };
    fetchTodoItems();
  }, []);

  const deleteTodoItem = async (event) => {
    const deleteById = () => axios.delete(`${url}/${event.target.value}`);
    const result = await deleteById();
    debugger;
    setTodoItems(result.data);
  };

  if (!todoItems) return <div>Loading...</div>;

  return (
    <div>
      <table style={border}>
        <tbody>
          <tr style={border}>
            <th style={border}>Check</th>
            <th style={border}>Name</th>
            <th style={border}>Priority</th>
            <th style={border}>Due date</th>
            <th style={border}>Actions</th>
          </tr>
          {todoItems.map((todo) => (
            <tr style={border}>
              <td style={border}>
                <input type="checkbox" value={todo.isDone} disable />
              </td>
              <td style={border}>{todo.name}</td>
              <td style={border}>{todo.priority}</td>
              <td style={border}>{todo.dueDate}</td>
              <td style={border}>
                <button
                  className={styles.primaryBtn}
                  onClick={() => setUpdateIsOpen(true)}
                >
                  {updateIsOpen && (
                    <UpdateTodoModal
                      todoItem={todo}
                      setIsOpen={setUpdateIsOpen}
                    />
                  )}
                  Edit
                </button>
                /
                <button
                  className={styles.primaryBtn}
                  value={todo.id}
                  onClick={deleteTodoItem}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoItemsTable;
