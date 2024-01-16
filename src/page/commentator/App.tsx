import { Stack } from "@mui/material";
import "./App.css";
import { RecoilRoot } from "recoil";
import { CommentatorInfo } from "../../component/commentator/CommentatorInfo";
import { CommentatorTable } from "../../component/commentator/CommentatorTable";

function App() {
  return (
    <RecoilRoot>
      <Stack spacing={2} direction="row">
        <CommentatorInfo />
        <CommentatorTable />
      </Stack>
    </RecoilRoot>
  );
}

export default App;
