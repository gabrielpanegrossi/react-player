export interface TMedia {
  name: string;
  type: "image" | "mp4" | "youtube" | "mp3";
  url: string;
  imageUrl?: string;
  durationTimeInMs?: number;
}
