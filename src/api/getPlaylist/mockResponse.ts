import { TPlaylist } from "../../types";

export const mockResponse: TPlaylist = [
  {
    name: "nome 5",
    type: "image",
    imageUrl:
      "https://i.pinimg.com/originals/ea/69/f0/ea69f06986f641dca3eb19c3b4d7d93c.jpg",
    url: "https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3",
    durationTimeInMs: 5000,
  },
  {
    name: "nome 1",
    type: "mp4",
    url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
  },
  {
    name: "nome 2",
    type: "mp3",
    url: "https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3",
  },
  {
    name: "nome 3",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=ThVnb6Ac_6Y",
  },
  {
    name: "nome 4",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=tVTRY6851Ug",
  },
];
