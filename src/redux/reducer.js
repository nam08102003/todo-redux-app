// const initState = {
//   filters: {
//     search: "",
//     status: "All",
//     priority: [],
//   },

//   todoList: [
//     { id: 1, name: "Learn football", completed: false, priority: "Medium" },
//     { id: 2, name: "Learn gym", completed: true, priority: "High" },
//     { id: 3, name: "Learn volleyball", completed: false, priority: "Low" },
//   ],
// };

// const rootReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "todoList/updateStatus":
//       const newTodoList = state.todoList.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );
//       return {
//         ...state,
//         todoList: newTodoList,
//       };

//     case "todoList/addToDo":
//       return {
//         ...state,
//         todoList: [...state.todoList, action.payload],
//       };

//     case "filter/searchToDo":
//       return {
//         ...state,
//         filters: {
//           ...state.filters,
//           search: action.payload,
//         },
//       };
//     case "filter/searchToDoStatus":
//       return {
//         ...state,
//         filters: {
//           ...state.filters,
//           status: action.payload,
//         },
//       };
//     case "filter/searchToDoPriority":
//       return {
//         ...state,
//         filters: {
//           ...state.filters,
//           priority: action.payload,
//         },
//       };
//     default:
//       return state;
//   }
// };

// export default rootReducer;

import { createSlice } from "@reduxjs/toolkit";

export const todoListSlice = createSlice({
  name: "todoList",
  initialState: [
    { id: 1, name: "Learn football", completed: false, priority: "Medium" },
    { id: 2, name: "Learn gym", completed: true, priority: "High" },
    { id: 3, name: "Learn volleyball", completed: false, priority: "Low" },
  ],
  reducers: {
    updateStatus: (state, action) => {
      const newTodo = state.find((todo) => {
        return todo.id === action.payload;
      });

      newTodo.completed = !newTodo.completed;
    },

    addToDo: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    search: "",
    status: "All",
    priority: [],
  },
  reducers: {
    searchToDo: (state, action) => {
      state.search = action.payload;
    },

    searchToDoStatus: (state, action) => {
      state.status = action.payload;
    },

    searchToDoPriority: (state, action) => {
      state.priority = action.payload;
    },
  },
});
