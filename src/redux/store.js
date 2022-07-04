import { createStore, applyMiddleware } from "redux";
import allReducers from "./reducers.js/allReducers";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "authType",
  storage: storage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, allReducers);
const middleware = applyMiddleware(thunk, logger);
const store = createStore(persistedReducer, middleware);

const persistor = persistStore(store);

export { persistor, store };
