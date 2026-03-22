import api from "./axios";

export const loginUser = async (credentials) => {
  const response = await api.post("/auth/login", {
    username: credentials.username,
    password: credentials.password,
  });
  return response.data;
};