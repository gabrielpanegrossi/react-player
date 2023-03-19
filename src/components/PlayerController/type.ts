export interface Controls {
  triggerNextMedia: () => void;
  changeVolume: (operation: "minus" | "plus") => void;
}
