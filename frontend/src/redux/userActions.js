import * as actionTypes from "./userTypes";
import { MY_ORDERS_RESET } from "./orderTypes";
import axios from "axios";

// User Log In
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.USER_LOGIN_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config
    );

    dispatch({
      type: actionTypes.USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: actionTypes.USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.mesage,
    });
  }
};

// User Log Out
export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: actionTypes.USER_LOGOUT });
  dispatch({ type: actionTypes.USER_DETAILS_RESET });
  dispatch({ type: MY_ORDERS_RESET });
  dispatch({ type: actionTypes.USER_LIST_RESET });
};

// User Register
export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.USER_REGISTER_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/users",
      { name, email, password },
      config
    );

    dispatch({
      type: actionTypes.USER_REGISTER_SUCCESS,
      payload: data,
    });

    // user is automatically logged in after registering
    dispatch({
      type: actionTypes.USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: actionTypes.USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.mesage,
    });
  }
};

// Get User Details
export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionTypes.USER_DETAILS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/users/${id}`, config);

    dispatch({
      type: actionTypes.USER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.mesage,
    });
  }
};

// Update User Profile
export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionTypes.USER_UPDATE_PROFILE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/users/profile`, user, config);

    dispatch({
      type: actionTypes.USER_UPDATE_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.USER_UPDATE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.mesage,
    });
  }
};

// Update User Profile
export const listUsers = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionTypes.USER_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/users`, config);

    dispatch({
      type: actionTypes.USER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.USER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.mesage,
    });
  }
};

// Delete User
export const deleteUser = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionTypes.USER_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/users/${id}`, config);

    dispatch({
      type: actionTypes.USER_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.USER_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.mesage,
    });
  }
};

// Update User
export const updateUser = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionTypes.USER_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/users/${user._id}`, user, config);

    dispatch({
      type: actionTypes.USER_UPDATE_SUCCESS,
    });
    dispatch({
      type: actionTypes.USER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.USER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.mesage,
    });
  }
};
