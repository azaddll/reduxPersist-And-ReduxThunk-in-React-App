import axios from "axios";
import { SETUSERNAME, GETUSERSLIST } from "./actionType";

const url = "https://gorest.co.in/public/v2/users";
const token =
  "e1f3d97bd32e1b05c75ba2b23ad4841a94e2319e9e4cad0906653a08e15c09ef";

export const setUserName = (value) => {
  return {
    type: SETUSERNAME,
    payload: value,
  };
};

export const getUsersList = () => {
  try {
    return async (dispatch) => {
      const result = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Basic ${token}`,
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GETUSERSLIST,
          payload: json,
        });
      } else {
        console.log("error on read data with axios and redux");
      }
    };
  } catch (error) {
    console.log(error);
  }
};
