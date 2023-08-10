import { legacy_createStore as createStore } from "redux";

const isLoggedinReducer = (state = { isLoggedin: false }, action) => {
  // if (action.type === "login") {
  if (action.type === "changeState") {
    return { isLoggedin: !state.isLoggedin };
  }

  return state;
  // }

  // if (action.type === "logout") {
  // return { isLoggedin: !state.isLoggedin };
  // }
};
const store = createStore(isLoggedinReducer);

export default store;
