import React, { useEffect } from "react";

function SearchTodoItem(todoItem) {
  const [todoItemId, setTodoItemId] = useState(todoItem.id);
  const [todoItemName, setTodoItemName] = useState(todoItem.name);
  const [todoItemDescription, setTodoItemDescription] = useState(
    todoItem.description
  );
  const [todoitemDone, setTodoItemDone] = useState(todoItem.isDone);
  const [todoItemPriority, setTodoItemPriority] = useState(todoItem.priority);

  useEffect(todoItem) = (data) => {
    if (todoItemId != null) {
        todoItemId = setTodoItemId(data.id)
      }
    if (todoItemName != null) {
        todoItemName = setTodoItemName(data.name)
    }
    if (todoItemId != null) {
        todoItemId = setTodoItemId(data.description)
    }
    if (todoItemId != null) {
        todoItemId = setTodoItemId(data.isDone)
    }
    if (todoItemId != null) {
        todoItemId = setTodoItemId(data.priority)
    }

  }
  
  return (
    <div>{...todoItem}</div>
    )
}

export default SearchTodoItem;
