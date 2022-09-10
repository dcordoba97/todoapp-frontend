// import React, { useEffect } from "react";

// const UpdateTodoItem = (todoItem) => {
//   const [todoItemId, setTodoItemId] = useState(todoItem.id);
//   const [todoItemName, setTodoItemName] = useState(todoItem.name);
//   const [todoItemDescription, setTodoItemDescription] = useState(
//     todoItem.description
//   );
//   const [todoitemDone, setTodoItemDone] = useState(todoitem.isDone);
//   const [todoItemPriority, setTodoItemPriority] = useState(todoItem.priority);

//   useEffect(todoItems) = () => {
//     fetch("http://localhost:9090/api/todoItems");

//     if (todoItemId != null) {
//         todoItemId = setTodoItemId(data.id)
//       }
//     if (todoItemName != null) {
//         todoItemName = setTodoItemName(data.name)
//     }
//     if (todoItemId != null) {
//         todoItemId = setTodoItemId(data.description)
//     }
//     if (todoItemId != null) {
//         todoItemId = setTodoItemId(data.isDone)
//     }
//     if (todoItemId != null) {
//         todoItemId = setTodoItemId(data.priority)
//     }

//   }, [] )

//   return (
//     <div>
//       <button
//         onClick={ (todoItem) => {UpdateTodoItem} }
//       />
//       <label>
//         <input
//           type="checkbox"
//           checked={todoitemDone}
//           onChange={setTodoItemDone}
//         />
//         {todo.name}
//       </label>
//     </div>
//   );
// };
