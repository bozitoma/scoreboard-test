import { useRive, useStateMachineInput } from "@rive-app/react-canvas";

import rivefile from "../../assets/vgbc.riv";
import { Button } from "@mui/material";

export const Rive = () => {
  const { rive, RiveComponent } = useRive({
    src: rivefile,
    artboard: "ScoreboardSF6",
    stateMachines: "Scoreboard",
    autoplay: true,
  });

  const isTriggerRound = useStateMachineInput(rive, "Scoreboard", "test");
  const onClick = () => {
    isTriggerRound?.fire();
  };

  return (
    <>
      <>
        <RiveComponent style={{ width: "1920px", height: "1080px" }} />
        <Button onClick={onClick}>click</Button>
      </>
    </>
  );
};
