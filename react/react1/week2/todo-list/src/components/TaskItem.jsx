export default function TaskItem(props) {
  return (
    <li className="list-item">
      <span>{props.description}</span>
      <span>{props.deadline}</span>
    </li>
  );
}
