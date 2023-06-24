const configureStore = require("@reduxjs/toolkit").configureStore;
const reduxLogger = require("redux-logger");

const cakeReducer = require("../features/cake/cakeSlice");
const userReducer = require('../features/userAsync/userSlice')

const iceCreamReduceer =
  require("../features/iceCream/iceCreamSlice").iceCreamReducer;

const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReduceer,
    user: userReducer,
  },

  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(logger),
});

module.exports = store;
