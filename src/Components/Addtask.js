import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Add } from "../Redux/action/Add";

function AddTask() {
  const dispatch = useDispatch();
  const [des, setDes] = useState("");

  // methods
  const handlAdd = (e) => {
    e.preventDefault();
    dispatch(Add(des));
    setDes("");
  };

  // return
  return (
    <div>
      <Form
        className="add"
        onSubmit={des === "" ? () => alert("enter description") : handlAdd}
      >
        <Form.Control
          type="text"
          placeholder="enter text"
          value={des}
          onChange={(e) => setDes(e.target.value)}
        />
        <Button variant="outline-warning" onClick={handlAdd}>
          Add
        </Button>
      </Form>
    </div>
  );
}

export default AddTask;
