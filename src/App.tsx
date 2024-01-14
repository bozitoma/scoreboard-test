import { Stack } from "@mui/material";
import "./App.css";
import { TournamentEditField } from "./component/tournament/TournamentEditField";
import { RecoilRoot } from "recoil";
import { TournamentButtons } from "./component/tournament/TournamentButtons";
import { StartggUrlInput } from "./component/tournament/StartggUrlInput";
import { TableList } from "./component/commentator/Table";
import { CommentatorInfo } from "./component/commentator/CommentatorInfo";
import { CommentatorList } from "./component/commentator/CommentatorList";

function App() {
  return (
    <RecoilRoot>
      <Stack spacing={2} direction="row">
        {/* <StartggUrlInput />
        <TournamentButtons />
        <TournamentEditField /> */}
        <CommentatorInfo />
        <CommentatorList />
        {/* <TableList /> */}
      </Stack>
    </RecoilRoot>
  );
}

export default App;
