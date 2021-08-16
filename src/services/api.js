import axios from "axios";

export const api = axios.create({
  baseURL: "https://dogsapi.origamid.dev/json",
  headers: {
    "Content-type": "application/json",
  },
});

export async function LOGIN(username, password) {
  return api.post("jwt-auth/v1/token", { username, password });
}

export async function GET_USER(token) {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return api.get("api/user");
}

export async function VALIDATE_TOKEN(token) {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return api.post("jwt-auth/v1/token/validate");
}

export async function CREATE_USER(username, email, password) {
  return api.post("api/user", { username, email, password });
}

export async function SEND_PHOTO(token, payload) {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return api.post("api/photo", payload);
}

export async function GET_PHOTOS({ page, total, user }) {
  return api.get(`api/photo/?_page=${page}&_total=${total}&_user=${user}`);
}

export async function GET_PHOTO(id) {
  return api.get(`api/photo/${id}`);
}

export async function SEND_COMMENT(id, payload, token) {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return api.post(`api/comment/${id}`, payload);
}

export async function DELETE_PHOTO(id, token) {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return api.delete(`api/comment/${id}`);
}
