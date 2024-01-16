import { Divider, Stack } from "@mui/material";
import "./App.css";
import { BracketEditField } from "../../component/bracket/BracketEditField";
import { RecoilRoot } from "recoil";
import { BracketButtons } from "../../component/bracket/BracketButtons";
import { BracketStartggUrlInput } from "../../component/bracket/BracketStartggUrlInput";

function App() {
  return (
    <RecoilRoot>
      <Stack spacing={2}>
        <Stack spacing={2} direction="row">
          <BracketButtons />
          <Divider orientation="vertical" flexItem />
          <BracketStartggUrlInput />
        </Stack>
        <BracketEditField />
      </Stack>
    </RecoilRoot>
  );
}

export default App;
