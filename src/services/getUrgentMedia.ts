import { TMedia } from "../types";
import { mediaBox } from "./api";

export interface TUrgentMedia {
  target_date: string;
  search_start_time: string;
  search_end_time: string;
  search_interval_in_seconds: number;
  media: TMedia;
}

export const getUrgentMedia = (playlistId: string) =>
  mediaBox.get<TUrgentMedia>(`api/priority/${playlistId}/`);
