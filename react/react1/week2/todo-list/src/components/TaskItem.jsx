export default function TaskItem({
  checked,
  description,
  itemId,
  handleInputChange,
  deleteItem,
}) {
  return (
    <li className={checked ? "list-item checked" : "list-item"}>
      <span>{description}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => handleInputChange(itemId)}
      />
      <button
        onClick={() => {
          deleteItem(itemId);
        }}
      >
        Delete
      </button>
    </li>
  );
}
