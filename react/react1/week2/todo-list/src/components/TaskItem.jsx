export default function TaskItem({
  checked,
  description,
  itemid,
  itemindex,
  handleInputChange,
  deleteItem,
  deleteCheckBoxState,
}) {
  return (
    <li className={checked ? "list-item checked" : "list-item"}>
      <span>{description}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => handleInputChange(itemindex)}
      />
      <button
        onClick={() => {
          deleteItem(itemid);
          deleteCheckBoxState(itemindex);
        }}
      >
        Delete
      </button>
    </li>
  );
}

// Using life cycles, set up a timer that counts how long time a users has spent on the website.
