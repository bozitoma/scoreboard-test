import { Stack } from "@mui/material";
import "./App.css";
import { TableList } from "./component/Table";
import { TournamentEditField } from "./component/tournament/TournamentEditField";
import { RecoilRoot } from "recoil";
import { TableSets } from "./component/tournament/tableSets";

function App() {
  return (
    <RecoilRoot>
      <Stack spacing={2}>
        <TableSets />
        <TournamentEditField />
        <TableList />
      </Stack>
    </RecoilRoot>
  );
}

export default App;
