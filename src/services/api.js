import axios from "axios";

export const api = axios.create({
  baseURL: "https://dogsapi.origamid.dev/json",
  headers: {
    "Content-type": "application/json",
  },
});
