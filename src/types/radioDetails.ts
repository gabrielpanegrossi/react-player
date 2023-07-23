import { TPlaylistDetails } from "./playlistDetails";

export type TRadioDetails = {
  id: string;
  name: string;
  image: string;
  playlists: TPlaylistDetails[];
};
