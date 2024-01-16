import TextField from "@mui/material/TextField";
import { useRecoilState } from "recoil";
import { infoScoreboradAtom } from "../../store/atomScoreboard";
import { PlayerPort } from "../../types/scoreboardDefaultValue";
import { ChangeEventHandler } from "react";

type Props = {
  port: PlayerPort;
};

export function InfoIDSolo({ port }: Props) {
  const [infoScoreborad, setInfoScoreboard] =
    useRecoilState(infoScoreboradAtom);

  const playerIDEdit: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    setInfoScoreboard((prev) => ({
      ...prev,
      [port]: {
        ...prev[port],
        xID: event.target.value,
      },
    }));
  };

  return (
    <>
      <TextField
        id={`${port}-ID`}
        label="@ID"
        variant="outlined"
        size="small"
        value={infoScoreborad[port].xID}
        onChange={playerIDEdit}
        sx={{ width: 145 }}
      />
    </>
  );
}
