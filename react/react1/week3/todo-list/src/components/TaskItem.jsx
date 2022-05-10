import { useState } from "react";
function TaskItemBorder(props) {
  return <div className="list-item-bordered">{props.children}</div>;
}

export default function TaskItem(props) {
  const [changeInput, setChangeInput] = useState(false);
  const [updateValue, setUpdateValue] = useState(props.description);
  const handleChangeInput = () => {
    setChangeInput(true);
  };
  const saveUpdateValue = () => {
    setChangeInput(false);
    props.updateItem(props.itemId, updateValue);
  };
  const handleUpdateValue = (e) => {
    setUpdateValue(e.target.value);
  };
  return (
    <li className={props.checked ? "list-item checked" : "list-item"}>
      <TaskItemBorder>
        {changeInput ? (
          <input
            type="text"
            checked={false}
            value={updateValue}
            onChange={handleUpdateValue}
          />
        ) : (
          <div className="list-item-text">
            {props.description} | {props.deadline}
          </div>
        )}
        <input
          type="checkbox"
          checked={props.checked}
          onChange={props.handleInputChange}
        />

        <button onClick={props.deleteItem}>Delete</button>
        {changeInput ? (
          <button onClick={saveUpdateValue}>Update</button>
        ) : (
          <button onClick={handleChangeInput}>Edit</button>
        )}
      </TaskItemBorder>
    </li>
  );
}
