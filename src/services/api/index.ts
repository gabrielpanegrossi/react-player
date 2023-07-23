import api from "./api";

export const mediaBox = api(`${process.env.REACT_APP_BACKEND_URL}`, {});

mediaBox.interceptors.request.use((config) => {
  const accessToken = window.localStorage.getItem("access_token");

  if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});
