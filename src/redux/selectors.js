import { createSelector } from "@reduxjs/toolkit";

export const todoListSelector = (state) => {
  //   const listToDoSearch = state.todoList.filter((todo) => {
  //     return todo.name.includes(state.filters.search);
  //   });

  //   return listToDoSearch;
  return state.todoList;
};

export const todoListTextSelector = (state) => state.filters.search;

export const todoListStatusSelector = (state) => state.filters.status;

export const todoListPrioritySelector = (state) => state.filters.priority;

export const searchTextSelector = createSelector(
  todoListSelector,
  todoListTextSelector,
  (todoList, searchText) => {
    return todoList.filter((todo) => {
      return todo.name.includes(searchText);
    });
  }
);

export const searchStatusSelector = createSelector(
  searchTextSelector,
  todoListStatusSelector,
  (todoList, todoStatus) => {
    if (todoStatus === "Completed") {
      return todoList.filter((todo) => {
        return todo.completed === true;
      });
    } else if (todoStatus === "Todo") {
      return todoList.filter((todo) => {
        return todo.completed === false;
      });
    }
    return todoList;
  }
);

export const searchPrioritySelector = createSelector(
  searchStatusSelector,
  todoListPrioritySelector,
  (todoList, priority) => {
    if (priority.length > 0) {
      return todoList.filter((todo) => {
        return priority.includes(todo.priority);
      });
    }
    return todoList;
  }
);
