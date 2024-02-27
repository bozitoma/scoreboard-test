import { Stack } from "@mui/material";
import "./App.css";
import { RecoilRoot } from "recoil";
import { CommentatorInfo } from "../../component/commentator/CommentatorInfo";
import { CommentatorTable } from "../../component/commentator/CommentatorTable";
import SetImeageComponent from "../../component/general/test";
import { Rive } from "../../component/general/test2";

function App() {
  return (
    <RecoilRoot>
      <Stack spacing={2} direction="row" justifyContent="center">
        <CommentatorInfo />
        <CommentatorTable />
      </Stack>
      <SetImeageComponent />
      <Rive />
    </RecoilRoot>
  );
}

export default App;
