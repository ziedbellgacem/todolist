import { useSelector } from "react-redux";
import Task from "./Task";

function List() {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div>
      {tasks.map((task) => (
        <Task task={task} key={task.id} />
      ))}
    </div>
  );
}
export default List;
