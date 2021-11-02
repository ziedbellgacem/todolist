import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Done } from "../Redux/action/Add";

function Task({ task }) {
  const dispatch = useDispatch();

  const handelDone = () => {
    dispatch(Done(task.id));
  };
  return (
    <div className="task">
      <h3>{task.done?style={{color:"red"}}:task.description}</h3>
      <Button variant="success">Edit</Button>
      <Button variant="success">Delete</Button>
      <Button variant="success" onClick={handelDone}>
        {task.done ? "inDone" : "Done"}
      </Button>
    </div>
  );
}
export default Task;
