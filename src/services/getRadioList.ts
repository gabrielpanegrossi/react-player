import { TRadioList } from "../types";
import { mediaBox } from "./api";

export const getRadioList = () => mediaBox.get<TRadioList>("api/radio/");
