import { applyMiddleware, compose, createStore } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware, connectRouter } from "connected-react-router";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import rootReducer from "./reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";
import registerServiceWorker from "./registerServiceWorker";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { PersistGate } from "redux-persist/lib/integration/react";
import LoadingSpinner from "components/LoadingSpinner";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["userReducer", ""],
  stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
};
const pReducer = persistReducer(persistConfig, rootReducer);
const history = createBrowserHistory();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [routerMiddleware(history), thunk, logger];
const store = createStore(
  connectRouter(history)(pReducer), // new root reducer with router state
  {},
  composeEnhancer(applyMiddleware(...middlewares))
);
export const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<div> loading </div>} persistor={persistor}>
      <App history={history} />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
