import React from "react";
import { Logo } from "../Assets";
import { Player } from "../Player";
import { PlayerControllerContainer, Title } from "./styled";

export const PlayerContainer: React.FC = () => {
  return (
    <PlayerControllerContainer>
      <Title>
        <Logo />
        Mediabox
      </Title>
      <Player />
    </PlayerControllerContainer>
  );
};
