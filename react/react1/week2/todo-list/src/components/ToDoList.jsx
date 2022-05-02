import TaskItem from "./TaskItem";
import tasklist from "../data/tasklist";
import { useState, useEffect } from "react";

export default function ToDoList() {
  const [items, setItems] = useState(tasklist);

  function addItem() {
    setItems((prevItems) => {
      return [
        ...prevItems,
        {
          id: new Date().getTime(),
          description: "Random task ",
          deadline: "Date",
        },
      ];
    });
  }

  function deleteItem(idToDelete) {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != idToDelete);
    });
  }

  function DeleteButton(props) {
    return <button onClick={() => deleteItem(props.forDelete)}>Delete</button>;
  }

  // if (items.length === 0) {
  //   return <p>No items in toDo list</p>;
  // } else {

  return (
    <>
      <button onClick={() => addItem()}>Add random task</button>
      <ul className="list">
        {items.length ? (
          items.map((item) => {
            return (
              <li key={item.id} className="list-item">
                <TaskItem
                  description={item.description}
                  deadline={item.deadline}
                />
                <DeleteButton forDelete={item.id} />
              </li>
            );
          })
        ) : (
          <p>No items</p>
        )}
      </ul>
    </>
  );
}
