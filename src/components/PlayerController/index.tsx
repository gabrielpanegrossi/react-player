import React from "react";
import screenfull from "screenfull";
import { ArrowRight, FullScreen, Minus, Plus } from "../Assets";

import { Button } from "../Button";
import { PlayerControllerContainer } from "./styled";
import { Controls } from "./type";

export const PlayerController: React.FC<{ controls: Controls }> = ({
  controls,
}) => {
  const element = document.getElementById("playerContainer");

  const handleFullScreen = () => {
    if (element && screenfull.isEnabled) {
      screenfull.request(element);
    }
  };

  return (
    <PlayerControllerContainer>
      <Button design="secondary" onClick={() => controls.changeVolume("plus")}>
        <Plus />
      </Button>
      <Button design="secondary" onClick={() => controls.changeVolume("minus")}>
        <Minus />
      </Button>
      <Button design="secondary" onClick={controls.triggerNextMedia}>
        <ArrowRight />
      </Button>
      <Button design="secondary" onClick={handleFullScreen}>
        <FullScreen />
      </Button>
    </PlayerControllerContainer>
  );
};
