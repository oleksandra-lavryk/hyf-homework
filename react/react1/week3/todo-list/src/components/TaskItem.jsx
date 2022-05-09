export default function TaskItem(props) {
  return (
    <li className={props.checked ? "list-item checked" : "list-item"}>
      <div className="list-item-text">
        {props.description} | {props.deadline}
      </div>
      <input
        type="checkbox"
        checked={props.checked}
        onChange={props.handleInputChange}
      />
      <button onClick={props.deleteItem}>Delete</button>
      <button>Edit</button>
    </li>
  );
}
