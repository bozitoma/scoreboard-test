import TextField from "@mui/material/TextField";
import { ChangeEventHandler } from "react";

type Props = {
  id: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

export function TournamentRoundFieldSolo({ id, value, onChange }: Props) {
  return (
    <>
      <TextField
        id={id}
        variant="standard"
        sx={{ width: 244 }}
        size="small"
        value={value}
        onChange={onChange}
      />
    </>
  );
}
