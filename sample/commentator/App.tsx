import { Stack } from "@mui/material";
import "./App.css";
import { RecoilRoot } from "recoil";
import { CommentatorInfo } from "../component/commentator/CommentatorInfo";
import { CommentatorList } from "../component/commentator/CommentatorList";

function App() {
  return (
    <RecoilRoot>
      <Stack spacing={2} direction="row">
        <CommentatorInfo />
        <CommentatorList />
      </Stack>
    </RecoilRoot>
  );
}

export default App;
