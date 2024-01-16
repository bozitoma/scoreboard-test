import { Button, Stack } from "@mui/material";
import "./App.css";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Stack spacing={2} direction="row">
        <Button variant="contained" href="/scoreboard">
          scoreborad
        </Button>
        <Button variant="contained" href="/bracket">
          bracket
        </Button>
        <Button variant="contained" href="/commentator">
          commentator
        </Button>
      </Stack>
    </RecoilRoot>
  );
}

export default App;
