export interface TMedia {
  id?: string;
  name?: string;
  media_type?: "image" | "mp4" | "youtube" | "mp3";
  media_url: string;
  is_muted?: boolean;
  duration_time_in_ms?: number;
}
