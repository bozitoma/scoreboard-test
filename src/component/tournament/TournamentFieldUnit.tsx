import { IconButton, Stack } from "@mui/material";
import { TournamentFieldSolo } from "./TournamentFieldSolo";
import ReplyIcon from "@mui/icons-material/Reply";
import DeleteIcon from "@mui/icons-material/Delete";
import { ChangeEventHandler, MouseEventHandler } from "react";
import { tournamentRoundList } from "../../types/tournamentResultDefaultValue";

type Props = {
  value: tournamentRoundList;
  onChangeName: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onChangeScore: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  name: tournamentRoundText;
  assign: MouseEventHandler<HTMLButtonElement>;
  reset: MouseEventHandler<HTMLButtonElement>;
};

export function TournamentFieldUnit({
  value,
  onChangeName,
  onChangeScore,
  name,
  reset,
  assign,
}: Props) {
  return (
    <>
      <Stack spacing={0.5}>
        <Stack direction="row">
          <TournamentFieldSolo
            idName={`${name}-name1p`}
            valueName={value[name].name1p}
            onChangeName={onChangeName}
            idScore={`${name}-score1p`}
            valueScore={value[name].score1p}
            onChangeScore={onChangeScore}
          />
          <IconButton color="primary" onClick={assign} name={name}>
            <ReplyIcon />
          </IconButton>
        </Stack>
        <Stack direction="row">
          <TournamentFieldSolo
            idName={`${name}-name2p`}
            valueName={value[name].name2p}
            onChangeName={onChangeName}
            idScore={`${name}-score2p`}
            valueScore={value[name].score2p}
            onChangeScore={onChangeScore}
          />
          <IconButton onClick={reset} name={name}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      </Stack>
    </>
  );
}
