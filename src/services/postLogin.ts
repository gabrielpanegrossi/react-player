import { TCredentials } from "../types";
import { mediaBox } from "./api";

export interface TPostLoginResponse {
  refresh: string;
  access: string;
}

export const postLogin = (credentials: TCredentials) =>
  mediaBox.post<TPostLoginResponse>("api/token/", credentials);
