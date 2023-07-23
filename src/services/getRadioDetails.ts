import { TRadioDetails } from "../types";
import { mediaBox } from "./api";

export const getRadioDetails = (radioId: string) =>
  mediaBox.get<TRadioDetails>(`api/radio/${radioId}/`);
