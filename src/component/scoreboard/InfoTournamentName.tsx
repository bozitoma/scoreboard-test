import { TextField } from "@mui/material";
import { useRecoilState } from "recoil";
import { infoScoreboradAtom } from "../../store/atomScoreboard";
import { ChangeEventHandler } from "react";

export function InfoTournamentName() {
  const [infoScoreborad, setInfoScoreboard] =
    useRecoilState(infoScoreboradAtom);

  const tournamentNameEdit: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    setInfoScoreboard((prev) => ({
      ...prev,
      TournamentName: event.target.value,
    }));
  };

  return (
    <>
      <TextField
        id="InfoTournament"
        label="Tournament Name"
        variant="outlined"
        sx={{ width: 200 }}
        size="small"
        value={infoScoreborad.TournamentName}
        onChange={tournamentNameEdit}
      />
    </>
  );
}
