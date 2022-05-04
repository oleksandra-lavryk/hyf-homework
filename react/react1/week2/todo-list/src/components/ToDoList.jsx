import TaskItem from "./TaskItem";
import tasklist from "../data/tasklist";
import { useState } from "react";

export default function ToDoList() {
  const [items, setItems] = useState(tasklist);

  const [checkBoxState, setCheckBoxState] = useState(
    new Array(items.length).fill(false)
  );

  const addItem = () => {
    setItems((prevItems) => {
      return [
        ...prevItems,
        {
          id: new Date().getTime(),
          description: "Random task ",
        },
      ];
    });
    setCheckBoxState((prevCheckBoxState) => {
      return [...prevCheckBoxState, false];
    });
  };
  const deleteItem = (idToDelete) => {
    setItems((prevItems) => {
      const changetItems = [...prevItems].filter(
        (item) => item.id != idToDelete
      );
      return changetItems;
    });
  };

  const deleteCheckBoxState = (indextoDel) => {
    setCheckBoxState((prevCheckBoxState) => {
      const changedCheckStateArr = [...prevCheckBoxState];
      changedCheckStateArr.splice(indextoDel, 1);
      return changedCheckStateArr;
      // return prevCheckBoxState.splice(indextoDel, 1); //not working
    });
  };
  const handleInputChange = (position) => {
    setCheckBoxState((prevCheckBoxState) => {
      return prevCheckBoxState.map((item, index) =>
        index === position ? !item : item
      );
    });
  };
  return (
    <>
      <button onClick={() => addItem()}>Add random task</button>
      <ul className="list">
        {items.length ? (
          items.map((item, index) => {
            return (
              <TaskItem
                key={item.id}
                checked={checkBoxState[index]}
                description={item.description}
                itemid={item.id}
                itemindex={index}
                handleInputChange={handleInputChange}
                deleteItem={deleteItem}
                deleteCheckBoxState={deleteCheckBoxState}
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
