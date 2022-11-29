// import { createStore } from "redux";
// import rootReducer from "./reducer";
// import { composeWithDevTools } from "redux-devtools-extension";

// const composeEnhancers = composeWithDevTools();

// const store = createStore(rootReducer, composeEnhancers);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import { todoListSlice, filterSlice } from "./reducer";

const store = configureStore({
  reducer: {
    filters: filterSlice.reducer,
    todoList: todoListSlice.reducer,
  },
});

export default store;
