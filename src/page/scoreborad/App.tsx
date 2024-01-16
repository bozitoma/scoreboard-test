import "./App.css";
import { RecoilRoot } from "recoil";

import { Box, Stack } from "@mui/material";
import { InfoTournamentName } from "../../component/scoreboard/InfoTournamentName";
import { InfoRound } from "../../component/scoreboard/InfoRound";
import { InfoBestof } from "../../component/scoreboard/InforBestof";
import { InfoPlayer } from "../../component/scoreboard/InfoPlayer";
import { ScoreCounter } from "../../component/scoreboard/ScoreCounter";
import { TitleDivider } from "../../component/general/TitleDivider";
import { ScoreboardButtons } from "../../component/scoreboard/ScoreboardButtons";
import { useStyled } from "../../hooks/useStyled";
import { MatchesTable } from "../../component/scoreboard/MatchesTable";

function App() {
  const { Heading } = useStyled();
  return (
    <RecoilRoot>
      <Stack spacing={2} direction="row">
        <Box
          sx={{
            p: 2,
            bgcolor: "background.paper",
            boxShadow: 1,
            borderRadius: 2,
          }}
        >
          <Stack justifyContent="center" spacing={2}>
            <Heading>Scoreboard Editor</Heading>
            <TitleDivider text="Information" />
            <Stack spacing={2} direction="row">
              <InfoTournamentName />
              <InfoRound />
              <InfoBestof />
            </Stack>
            <InfoPlayer />
            <ScoreCounter />
            <ScoreboardButtons />
          </Stack>
        </Box>
        <MatchesTable />
      </Stack>
    </RecoilRoot>
  );
}

export default App;
