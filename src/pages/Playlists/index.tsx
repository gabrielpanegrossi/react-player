import React from "react";
import { Modal } from "../../components";
import { Player } from "../../components/Player";

export const Playlists: React.FC = () => {
  const playlists = ["Playlist 1", "Playlist 2", "Playlist 3"];

  return (
    <>
      {playlists.map((playlist) => (
        <div>{playlist}</div>
      ))}
    </>
  );
};
