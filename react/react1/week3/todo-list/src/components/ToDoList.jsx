import TaskItem from "./TaskItem";
import tasklist from "../data/tasklist";
import { useState, useEffect } from "react";

export default function ToDoList() {
  const [items, setItems] = useState([]);
  const [inputTaskValue, setInputTaskValue] = useState("");
  const [inputError, setInputError] = useState("");

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw"
    )
      .then((response) => response.json())
      .then((result) => {
        setItems(
          result.map((item) => {
            return { ...item, isChecked: false };
          })
        );
      });
  }, []);

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
            deadline: "2022-05-21",
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
      <div className="input-error">{inputError}</div>
      <ul className="list">
        {items.length ? (
          items.map((item) => {
            return (
              <TaskItem
                key={item.id}
                checked={item.isChecked}
                description={item.description}
                deadline={item.deadline}
                itemId={item.id}
                handleInputChange={() => handleInputChange(item.id)}
                deleteItem={() => deleteItem(item.id)}
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
