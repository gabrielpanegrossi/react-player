import { TPlaylist } from "../../types";
import { mockResponse } from "./mockResponse";

export const getPlaylist = () =>
  new Promise<TPlaylist>((resolve, reject) => {
    setTimeout(() => resolve(mockResponse), 3000);
  });
