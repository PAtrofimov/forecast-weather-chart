import { applyMiddleware, compose, createStore } from "redux";
import createRootReducer from "./rootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(),
    preloadedState,
    compose(
      applyMiddleware(
        logger,
        thunk
      )
    )
  );

  return store;
}
