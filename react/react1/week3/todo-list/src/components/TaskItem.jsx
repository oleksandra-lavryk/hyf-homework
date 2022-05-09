export default function TaskItem({
  checked,
  description,
  deadline,
  handleInputChange,
  deleteItem,
}) {
  return (
    <li className={checked ? "list-item checked" : "list-item"}>
      <div className="list-item-text">
        {description} | {deadline}
      </div>
      <input type="checkbox" checked={checked} onChange={handleInputChange} />
      <button onClick={deleteItem}>Delete</button>
      <button>Edit</button>
    </li>
  );
}
