import TextField from "@mui/material/TextField";
import { useRecoilState } from "recoil";
import { infoScoreboradAtom } from "../../store/atomScoreboard";
import { PlayerPort } from "../../types/scoreboardDefaultValue";
import { ChangeEventHandler } from "react";

type Props = {
  port: PlayerPort;
};

export function InfoTeamSolo({ port }: Props) {
  const [infoScoreborad, setInfoScoreboard] =
    useRecoilState(infoScoreboradAtom);

  const playerTeamEdit: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    setInfoScoreboard((prev) => ({
      ...prev,
      [port]: {
        ...prev[port],
        team: event.target.value,
      },
    }));
  };

  return (
    <>
      <TextField
        id={`${port}-team`}
        label="Team"
        variant="outlined"
        size="small"
        value={infoScoreborad[port].team}
        onChange={playerTeamEdit}
        sx={{ width: 145 }}
      />
    </>
  );
}
