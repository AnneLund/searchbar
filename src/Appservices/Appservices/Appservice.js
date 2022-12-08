import Axios from "axios";

import { API_URL, Base_URL, HOTEL_URL, ROOM_URL } from "./API_URL";

import AuthHeader from "./auth-header";

const GetList = (endpoint) => {
  return Axios.get(`${API_URL}/${endpoint}`, {
    headers: AuthHeader(),
  });
};

const GetListFromKeyWord = (e, id) => {
  return Axios.get(`${API_URL}/${e}/${id}`, {
    headers: AuthHeader(),
  });
};

const GetRoomsFromHotel = (e, id) => {
  return Axios.get(`${ROOM_URL}/${e}/${id}`, {
    headers: AuthHeader(),
  });
};

const GetDetail = (e, id) => {
  return Axios.get(`${API_URL}/${e}/${id}`, {
    headers: AuthHeader(),
  });
};

const Create = (e, data) => {
  return Axios.post(`${API_URL}/${e}`, data, {
    headers: AuthHeader(),
  });
};

const Login = async (username, password) => {
  return await Axios.post(`${Base_URL}/token`, { username, password });
};

const Update = async (e, id, data) => {
  return await Axios.put(`${API_URL}/${e}/${id}`, data, {
    headers: AuthHeader(),
  });
};

const Delete = (e, id) => {
  return Axios.delete(`${API_URL}/${e}/${id}`, {
    headers: AuthHeader(),
  });
};

const AppService = {
  GetList,
  GetDetail,
  GetRoomsFromHotel,
  GetListFromKeyWord,
  Create,
  Update,
  Delete,
  Login,
};

export default AppService;
