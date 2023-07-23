import React from "react";
import { Logo } from "../Logo";
import { Player } from "../Player";
import { PlayerControllerContainer } from "./styled";

export const PlayerContainer: React.FC = () => {
  return (
    <PlayerControllerContainer>
      <Player />
    </PlayerControllerContainer>
  );
};
