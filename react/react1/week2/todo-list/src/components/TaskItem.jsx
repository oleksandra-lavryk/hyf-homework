export default function TaskItem(props) {
  return (
    <>
      <span>{props.description}</span>
      <span>{props.deadline}</span>
    </>
  );
}
