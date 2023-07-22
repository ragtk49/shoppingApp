import { loginFailure, loginStart, loginSuccess, logoutStart, logoutSuccess, logoutFailure } from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logout = async (dispatch) => {
    dispatch(logoutStart());
    try {
      // Make a POST request to the logout endpoint on the server
      await publicRequest.post("/auth/logout");
      // If the request is successful, dispatch the logout action to update the user state in the Redux store
      dispatch(logoutSuccess());
    } catch (error) {
      // Handle any errors that occur during the logout process
      dispatch(logoutFailure());
    }
  };