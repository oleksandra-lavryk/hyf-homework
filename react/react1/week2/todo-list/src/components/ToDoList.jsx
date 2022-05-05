import TaskItem from "./TaskItem";
import tasklist from "../data/tasklist";
import { useState } from "react";

export default function ToDoList() {
  const setTaskList = () => {
    return tasklist.map((item) => ({ ...item, isChecked: false })); //why like is is working? spread operator
  };

  const [items, setItems] = useState(() => setTaskList());

  const addItem = () => {
    setItems((prevItems) => {
      return [
        ...prevItems,
        {
          id: new Date().getTime(),
          description: "Random task ",
          isChecked: false,
        },
      ];
    });
  };
  const deleteItem = (idToDelete) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != idToDelete);
    });
  };

  const handleInputChange = (itemId) => {
    const markDoneArr = [...items];
    markDoneArr.map((item) => {
      if (item.id === itemId) {
        item.isChecked = !item.isChecked;
      }
      return item;
    });
    setItems(markDoneArr);
  };

  return (
    <>
      <button onClick={addItem}>Add random task</button>
      <ul className="list">
        {items.length ? (
          items.map((item) => {
            return (
              <TaskItem
                key={item.id}
                checked={item.isChecked}
                description={item.description}
                itemId={item.id}
                handleInputChange={handleInputChange}
                deleteItem={deleteItem}
              />
            );
          })
        ) : (
          <p>No items</p>
        )}
      </ul>
    </>
  );
}
