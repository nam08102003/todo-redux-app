export const updateStatusToDo = (data) => {
  return {
    type: "todoList/updateStatus",
    payload: data,
  };
};

export const addToDoAction = (data) => {
  return {
    type: "todoList/addToDo",
    payload: data,
  };
};

export const searchToDo = (data) => {
  return {
    type: "filter/searchToDo",
    payload: data,
  };
};

export const searchToDoStatus = (data) => {
  return {
    type: "filter/searchToDoStatus",
    payload: data,
  };
};

export const searchToDoPriority = (data) => {
  return {
    type: "filter/searchToDoPriority",
    payload: data,
  };
};
