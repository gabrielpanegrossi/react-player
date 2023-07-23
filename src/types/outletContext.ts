export interface TOutletContext {
  currentPlaylistId?: string;
  setCurrentPlaylistId?: React.Dispatch<
    React.SetStateAction<string | undefined>
  >;
}
