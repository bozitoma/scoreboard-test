import TextField from "@mui/material/TextField";
import { useRecoilState } from "recoil";
import { infoScoreboradAtom } from "../../store/atomScoreboard";
import { PlayerPort } from "../../types/scoreboardDefaultValue";
import { ChangeEventHandler } from "react";

type Props = {
  port: PlayerPort;
};

export function InfoNameSolo({ port }: Props) {
  const [infoScoreborad, setInfoScoreboard] =
    useRecoilState(infoScoreboradAtom);

  const playerNameEdit: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    setInfoScoreboard((prev) => ({
      ...prev,
      [port]: {
        ...prev[port],
        name: event.target.value,
      },
    }));
  };

  return (
    <>
      <TextField
        id={`${port}-name`}
        label="Name"
        variant="outlined"
        size="small"
        value={infoScoreborad[port].name}
        onChange={playerNameEdit}
        sx={{ width: 294 }}
      />
    </>
  );
}
