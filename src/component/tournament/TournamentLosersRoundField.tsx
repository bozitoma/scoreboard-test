import { Box, Divider, Stack } from "@mui/material";
import { TournamentRoundFieldSolo } from "./TournamentRoundFieldSolo";
import { useTournament } from "../../hooks/tournament/useTournament";

export function TournamentLosersRoundField() {
  const { tournamentRound, tournamentRoundEdit } = useTournament();
  return (
    <>
      <Divider>
        <Box
          sx={{
            color: "text.secondary",
            textAlign: "center",
            fontWeight: "medium",
            fontFamily: "Noto Sans JP",
          }}
        >
          Losers Side
        </Box>
      </Divider>
      <Stack spacing={4} direction="row">
        <TournamentRoundFieldSolo
          id="LTOP16"
          value={tournamentRound.LTOP16}
          onChange={tournamentRoundEdit}
        />
        <TournamentRoundFieldSolo
          id="LTOP8"
          value={tournamentRound.LTOP8}
          onChange={tournamentRoundEdit}
        />
        <TournamentRoundFieldSolo
          id="LQF"
          value={tournamentRound.LQF}
          onChange={tournamentRoundEdit}
        />
        <TournamentRoundFieldSolo
          id="LSF"
          value={tournamentRound.LSF}
          onChange={tournamentRoundEdit}
        />
        <TournamentRoundFieldSolo
          id="LF"
          value={tournamentRound.LF}
          onChange={tournamentRoundEdit}
        />
      </Stack>
    </>
  );
}
