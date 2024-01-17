import "./App.css";
import { RecoilRoot } from "recoil";
import { Stack } from "@mui/material";
import { MatchesTable } from "../../component/scoreboard/MatchesTable";
import { ScoreboardEditor } from "../../component/scoreboard/ScoreboardEditor";

function App() {
  return (
    <RecoilRoot>
      <Stack spacing={2} direction="row" justifyContent="center">
        <ScoreboardEditor />
        <MatchesTable />
      </Stack>
    </RecoilRoot>
  );
}

export default App;
