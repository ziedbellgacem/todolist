export const Add = (des) => {
  return {
    type: "ADD",
    payload: des,
  };
};
export const Done = (id) => {
  return {
    type: "DONE",
    payload: id,
  };
};

export const Edit = () => {
  return {
    type: "EDIT",
    payload: "",
  };
};

export const Delete = () => {
  return {
    type: "DELETE",
    payload: "",
  };
};
