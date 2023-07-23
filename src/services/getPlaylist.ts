import { TPlaylist } from "../types";
import { mediaBox } from "./api";

export const getPlaylist = (playlistId: string) =>
  mediaBox.get<TPlaylist>(`api/playlist/${playlistId}/`);
