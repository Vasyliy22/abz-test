import { COUNT_PER_PAGE, PAGE } from "../constants/api";
import User from "../types/User";
import { extendApiEndPoint } from "./utils";

const API = 'https://frontend-test-assignment-api.abz.agency/api/v1/users?';



export const getEndPoint = (page: number, count: number, ) => {
  return `${API}page${page}=&count=${count}`;
};

export const getUsers = async (queries: Record<string, string> = {}, page = PAGE, count = COUNT_PER_PAGE ) => {
  const response = await fetch(`${getEndPoint(page, count)}${extendApiEndPoint(queries)}`);

  return response.json();
};

export const getToken = () => {
  return fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
  .then(res => res.json()).then(res => res.token);
};

export const createUser = async (user: User) => {
  const {
    name,
    phone,
    photo,
    position_id,
    email
  } = user;

  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('phone', phone);
  formData.append('photo', photo);
  formData.append('position_id', position_id);

  const token = await getToken();

  const response = await fetch(API, {
    method: 'POST',
    body: formData,
    headers: {
      'Token': token,
    }
  });

  return response.json();
}