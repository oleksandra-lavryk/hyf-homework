import tasklist from "../data/tasklist";
import TaskItem from "./TaskItem";

export default function ToDoList() {
  return (
    <ul class="list">
      {tasklist.map((item) => {
        return (
          <TaskItem
            key={item.id}
            description={item.description}
            deadline={item.deadline}
          />
        );
      })}
    </ul>
  );
}
