import TaskItem from "./TaskItem";
import AddTask from "./AddTask";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export default function ToDoList() {
  const [items, setItems] = useState([]);
  const [inputTaskValue, setInputTaskValue] = useState("");
  const [inputTaskDeadline, setInputTaskDeadline] = useState("");
  const [inputTaskError, setInputTaskError] = useState("");
  const [inputDeadlineError, setInputDeadlineError] = useState("");

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
      setInputDeadlineError("");
      setInputTaskError("Enter task name");
      return;
    }
    if (inputTaskDeadline === "") {
      setInputTaskError("");
      setInputDeadlineError("Enter task deadline");
      return;
    }
    setInputTaskError("");
    setInputDeadlineError("");
    setItems((prevItems) => {
      return [
        ...prevItems,
        {
          id: new Date().getTime(),
          deadline: inputTaskDeadline,
          description: inputTaskValue,
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

  const handleinputTaskValue = (e) => {
    setInputTaskValue(e.target.value);
  };
  const handleinputTaskDeadline = (e) => {
    setInputTaskDeadline(e.target.value);
  };

  return (
    <>
      <AddTask
        addItem={addItem}
        inputTaskValue={inputTaskValue}
        inputTaskDeadline={inputTaskDeadline}
        inputTaskError={inputTaskError}
        inputDeadlineError={inputDeadlineError}
        handleinputTaskValue={handleinputTaskValue}
        handleinputTaskDeadline={handleinputTaskDeadline}
      />
      <ul className="list">
        {items.length ? (
          items.map((item) => {
            return (
              <TaskItem
                key={item.id}
                checked={item.isChecked}
                description={item.description}
                deadline={item.deadline}
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

TaskItem.propTypes = {
  checked: PropTypes.bool,
  description: PropTypes.string,
  deadline: PropTypes.string,
  handleInputChange: PropTypes.func,
};
