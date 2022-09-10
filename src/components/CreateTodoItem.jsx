import React from "react";

export const CreateTodoItem = (todoItem) => {
  return (
    <div>
      <form>
        <label>Name</label>
        <input
          id={todoItem.id}
          name={todoItem.name}
          description={todoItem.description}
          isDone={todoItem.isDone}
          priority={todoItem.priority}
        />
      </form>
      ;
    </div>
  );
};
