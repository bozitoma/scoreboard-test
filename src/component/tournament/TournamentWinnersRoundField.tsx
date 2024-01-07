import { Box, Divider, Stack } from "@mui/material";
import { TournamentRoundFieldSolo } from "./TournamentRoundFieldSolo";
import { useTournament } from "../../hooks/tournament/useTournament";

export function TournamentWinnersRoundField() {
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
          Winners Side
        </Box>
      </Divider>
      <Stack spacing={4} direction="row">
        <TournamentRoundFieldSolo
          id="WQF"
          value={tournamentRound.WQF}
          onChange={tournamentRoundEdit}
        />
        <TournamentRoundFieldSolo
          id="WSF"
          value={tournamentRound.WSF}
          onChange={tournamentRoundEdit}
        />
        <TournamentRoundFieldSolo
          id="WF"
          value={tournamentRound.WF}
          onChange={tournamentRoundEdit}
        />
        <TournamentRoundFieldSolo
          id="GF"
          value={tournamentRound.GF}
          onChange={tournamentRoundEdit}
        />
        <TournamentRoundFieldSolo
          id="GF2"
          value={tournamentRound.GF2}
          onChange={tournamentRoundEdit}
        />
      </Stack>
    </>
  );
}
