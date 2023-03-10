import React from "react";
import screenfull from "screenfull";
import { FullScreen } from "../Assets";

import { Button } from "../Button";
import { PlayerControllerContainer } from "./styled";

export const PlayerController = () => {
  const element = document.getElementById("playerContainer");

  const handleFullScreen = () => {
    if (element && screenfull.isEnabled) {
      screenfull.request(element);
    }
  };
  return (
    <PlayerControllerContainer>
      <Button design="tertiary" onClick={handleFullScreen}>
        <FullScreen />
      </Button>
    </PlayerControllerContainer>
  );
};
