import TaskItem from "./TaskItem";
import tasklist from "../data/tasklist";
import { useState } from "react";

export default function ToDoList() {
  const setTaskList = () => {
    return tasklist.map((item) => ({ ...item, isChecked: false }));
  };

  const [items, setItems] = useState(() => setTaskList());
  const [inputTaskValue, setInputTaskValue] = useState("");
  const [inputError, setInputError] = useState("");

  const addItem = () => {
    if (inputTaskValue === "") {
      setInputError("No data entered");
    } else {
      setInputError("");
      setItems((prevItems) => {
        return [
          ...prevItems,
          {
            id: new Date().getTime(),
            description: inputTaskValue,
            isChecked: false,
          },
        ];
      });
    }
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

  const handleinputTaskValue = (e) => {
    setInputTaskValue(e.target.value);
  };

  return (
    <>
      <input
        className="task-input"
        type="text"
        placeholder="Enter task name"
        value={inputTaskValue}
        onChange={handleinputTaskValue}
      />
      <button type="button" onClick={addItem}>
        Add task
      </button>
      <div class="input-error">{inputError}</div>
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
