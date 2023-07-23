import axios, { AxiosRequestConfig } from "axios";

const api = (baseURL: string, config?: AxiosRequestConfig) => {
  const instance = axios.create({ baseURL, ...config });

  return instance;
};

export default api;
