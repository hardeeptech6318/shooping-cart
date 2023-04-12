// import {createStore} from "redux"
// import rootReducer from "./reducers/index"

// const store =createStore(rootReducer)

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";

const store = configureStore({
  reducer: {
    allCart: cartReducer,
  },
});

export default store