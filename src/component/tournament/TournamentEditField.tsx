import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { TournamentWinnersRoundField } from "./TournamentWinnersRoundField";
import { TournamentLosersRoundField } from "./TournamentLosersRoundField";
import { TournamentField } from "./TournamentField";

export function TournamentEditField() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={3}>
        {/* Winners Round Text */}
        <TournamentWinnersRoundField />

        {/* Winners Side */}
        <Stack spacing={2} direction="row">
          {/* WQF */}

          <Stack spacing={2}>
            <TournamentField roundName="WQFa" />
            <TournamentField roundName="WQFb" />
            <TournamentField roundName="WQFc" />
            <TournamentField roundName="WQFd" />
          </Stack>

          {/* WSF */}
          <Stack spacing={14.5} sx={{ pt: 6 }}>
            <TournamentField roundName="WSFa" />
            <TournamentField roundName="WSFb" />
          </Stack>

          {/* WF */}
          <Stack sx={{ pt: 19 }}>
            <TournamentField roundName="WF" />
          </Stack>

          {/* GF */}
          <Stack sx={{ pt: 19 }}>
            <TournamentField roundName="GF" />
          </Stack>

          {/* GF2 */}
          <Stack sx={{ pt: 19 }}>
            <TournamentField roundName="GF2" />
          </Stack>
        </Stack>

        {/* Losers Round Text */}
        <TournamentLosersRoundField />

        {/* Losers Side */}
        <Stack spacing={2} direction="row">
          {/* LTOP16 */}
          <Stack spacing={2}>
            <TournamentField roundName="LTOP16a" />
            <TournamentField roundName="LTOP16b" />
            <TournamentField roundName="LTOP16c" />
            <TournamentField roundName="LTOP16d" />
          </Stack>

          {/* LTOP12 */}
          <Stack spacing={14.5} sx={{ pt: 6 }}>
            <TournamentField roundName="LTOP8a" />
            <TournamentField roundName="LTOP8b" />
          </Stack>

          {/* LQF */}
          <Stack spacing={14.5} sx={{ pt: 6 }}>
            <TournamentField roundName="LQFa" />
            <TournamentField roundName="LQFb" />
          </Stack>

          {/* LSF */}
          <Stack sx={{ pt: 19 }}>
            <TournamentField roundName="LSF" />
          </Stack>

          {/* LF */}
          <Stack sx={{ pt: 19 }}>
            <TournamentField roundName="LF" />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
