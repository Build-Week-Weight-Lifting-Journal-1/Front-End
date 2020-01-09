import axios from "axios";
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from "./types";

export const login = (credentials, history) => {
  return dispatch => {
    dispatch({
      type: LOGIN_START
    });
    axios
      .post(
        "https://webpt7-weightliftingjournal.herokuapp.com/api/auth/login",
        credentials
      )
      .then(res => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data
        });
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user_id", res.data.id);
        history.push("/");
      })
      .catch(err => {
        dispatch({
          type: LOGIN_FAIL,
          payload: err.response
        });
        console.log("authFailure", err.response);
      });
  };
};
