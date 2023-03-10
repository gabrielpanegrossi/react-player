import { TMedia } from "../../types";
import { mockResponse } from "./mockResponse";

export const getUrgentMedia = () =>
  new Promise<TMedia>((resolve, reject) => {
    setTimeout(() => resolve(mockResponse), 3000);
  });
