const initialstate = {
  tasks: [],
};

export const Addtodo = (state = initialstate, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: Math.random(), description: action.payload, done: false },
        ],
      };
    case "DONE":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, done: !task.done } : task
        ),
      };
    default:
      return state;
  }
};
