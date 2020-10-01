import { createStore, combineReducers, applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
import { ProductReducer } from "../redux/reducer/product";
import {CartReducer} from '../redux/reducer/cart'
const reducer = combineReducers({
  productReducer: ProductReducer,
  cartReducer:CartReducer,
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);
export const ConfigureStore = () => {
  const store = createStore(reducer, enhancer);
  return store;
};
