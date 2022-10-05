import { IS_LOGIN } from "./action";

let obj = JSON.parse(localStorage.getItem("loginUser")) || {
  token: "",
  user: { firstName: "", lastName: "", email: "" },
};

const initialState = { isLogin: obj };

export const isLoginReducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case IS_LOGIN:
      return { ...store, isLogin: payload };
    default:
      return store;
  }
};
