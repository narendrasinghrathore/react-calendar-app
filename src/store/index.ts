import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "./middleware/logger";
import { applyMiddleware, compose, createStore } from "redux";
import monitorReducerEnhancer from "./enhancers/monitorReducer";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import { combineReducers } from "redux";
import { month } from "./reducers";

const rootReducer = combineReducers({
  month,
});

export default function configureStore(preloadedState: any) {
  const middlewares: any = [loggerMiddleware, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers: any = [middlewareEnhancer, monitorReducerEnhancer];
  const composedEnhancers: any =
    process.env.NODE_ENV !== "production"
      ? composeWithDevTools(...enhancers)
      : compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  /**
   * Hot reloading
   * Another powerful tool which can make the development process a lot more intuitive is hot reloading,
   * which means replacing pieces of code without restarting your whole app.
   * For example, consider what happens when you run your app, interact with it for a while,
   * and then decide to make changes to one of your reducers.
   * Normally, when you make those changes your app will restart,
   * reverting your Redux state to its initial value.
   * With hot module reloading enabled, only the reducer you changed would be reloaded,
   * allowing you to change your code without resetting the state every time.
   * This makes for a much faster development process.
   * We'll add hot reloading both to our Redux reducers and to our React components.
   */
  // if (process.env.NODE_ENV !== "production" && module?.hot) {
  // module.hot.accept("./reducers", () => store.replaceReducer(rootReducer));
  // }

  return store;
}

export * from "./actions";
export * from "./reducers";
export * from "./selectors";
