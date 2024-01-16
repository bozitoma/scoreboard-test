import { Button, Stack } from "@mui/material";
import SwapHorizontalCircleRoundedIcon from "@mui/icons-material/SwapHorizontalCircleRounded";
import { useRecoilState } from "recoil";
import { infoScoreboradAtom } from "../../store/atomScoreboard";
import { InfoPlayerUnit } from "./InfoPlayerUnit";

export function InfoPlayer() {
  const [infoScoreborad, setInfoScoreboard] =
    useRecoilState(infoScoreboradAtom);

  const playerNameSwap = () => {
    setInfoScoreboard((prev) => ({
      ...prev,
      Player1: {
        name: infoScoreborad.Player2.name,
        team: infoScoreborad.Player2.team,
        xID: infoScoreborad.Player2.xID,
      },
      Player2: {
        name: infoScoreborad.Player1.name,
        team: infoScoreborad.Player1.team,
        xID: infoScoreborad.Player1.xID,
      },
      Player3: {
        name: infoScoreborad.Player4.name,
        team: infoScoreborad.Player4.team,
        xID: infoScoreborad.Player4.xID,
      },
      Player4: {
        name: infoScoreborad.Player3.name,
        team: infoScoreborad.Player3.team,
        xID: infoScoreborad.Player3.xID,
      },
    }));
  };

  return (
    <Stack direction="row" spacing={1}>
      <Stack spacing={1}>
        <InfoPlayerUnit port="Player1" />
      </Stack>
      <Button variant="text" onClick={playerNameSwap}>
        <SwapHorizontalCircleRoundedIcon />
      </Button>
      <Stack spacing={1}>
        <InfoPlayerUnit port="Player2" />
      </Stack>
    </Stack>
  );
}
