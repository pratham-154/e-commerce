import axios from "axios";
import Validator from "validatorjs";
import { store } from "../providers/redux/store";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//const phoneNumberRegex = /^\d{10}$/;
const phoneNumberRegex = /^[0-9\.]+$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

let validatorMake = async (data, rules, message) => {
  let validation = new Validator(data, rules, message);

  return validation;
};

const foreach = (obj, callback) => {
  for (let [key, value] of Object.entries(obj)) {
    callback(key, value);
  }
  return true;
};

const putApi = async (url, formData) => {
  let apiUrl = process.env.url;
  let userLoginData = store.getState().auth.data;
  let accessToken =
    userLoginData && userLoginData.login_token ? userLoginData.login_token : "";

  try {
    let resp = await axios.put(`${apiUrl}${url}`, formData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    let { data } = resp;
    return data;
  } catch (error) {
    console.error("PUT API Error:", error);
    return {
      status: false,
      message: error.response?.data?.message || "Something went wrong!",
      error: error.response?.data || error.message,
    };
  }
};

let postApi = async (url, formData) => {
  let apiUrl = process.env.url;
  let userLoginData = store.getState().auth.data;
  let accessToken =
    userLoginData && userLoginData.login_token && userLoginData.login_token
      ? userLoginData.login_token
      : "";
  let resp = await axios.post(`${apiUrl}${url}`, formData, {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  });
  let { data } = resp;
  return data;
};

let deleteApi = async (url, formData = {}) => {
  let apiUrl = process.env.url;
  let userLoginData = store.getState().auth.data;
  let accessToken =
    userLoginData && userLoginData.login_token ? userLoginData.login_token : "";

  try {
    let resp = await axios.delete(`${apiUrl}${url}`, {
      data: formData,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    let { data } = resp;
    return data;
  } catch (error) {
    console.error("Error in deleteApi:", error);
    return { status: false, message: "Request failed" };
  }
};

let getApi = async (url, params) => {
  let apiUrl = process.env.url;
  let userLoginData = store.getState().auth.data;
  let accessToken =
    userLoginData && userLoginData.login_token && userLoginData.login_token
      ? userLoginData.login_token
      : "";
  let resp = await axios
    .get(`${apiUrl}${url}`, {
      params,
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    })
    .then((resp) => {
      return resp;
    })
    .catch((error) => {
      if (error.response) {
        console.error("Network or other error:", error.message);
      } else {
        console.error("Network or other error:", error.message);
      }
    });

  if (resp) {
    return resp;
  } else {
    return [];
  }
};

const getHash = (length = 32) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const renderHtml = (data) => {
  return { __html: data };
};

module.exports = {
  validatorMake,
  foreach,
  putApi,
  postApi,
  deleteApi,
  getApi,
  getHash,
  renderHtml,
  emailRegex,
  phoneNumberRegex,
  passwordRegex,
};
