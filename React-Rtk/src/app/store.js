import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import cakeReducer from "../features/cake/cakeSlice"
import iceCreamReducer from "../features/iceCream/iceCreamSlice"
import userReducer from "../features/userAsync/userSlice"

const logger = createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer,
  },

  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(logger),
});

export default store
