import { TextField } from "@mui/material";

export function InfoTournamentName() {
  return (
    <>
      <TextField
        id="InfoTournament"
        label="Tournament Name"
        variant="outlined"
        sx={{ width: 200 }}
        size="small"
      />
    </>
  );
}
