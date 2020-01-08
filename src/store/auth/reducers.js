import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from "./types";

const initialState = {
  error: "",
  isLoading: false,
  isAuth: localStorage.getItem("token") ? true : false
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        error: "",
        isLoading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: "",
        isLoading: false,
        isAuth: true
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export default reducers;
