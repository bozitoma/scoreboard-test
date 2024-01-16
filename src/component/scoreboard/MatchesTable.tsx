import {
  Table,
  Box,
  TableContainer,
  Paper,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Radio,
  Stack,
  // Snackbar,
  // Alert,
} from "@mui/material";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { matchesAtom, matchesSelectedRowId } from "../../store/atomScoreboard";
import { ScoreboardStartggUrlInput } from "./ScoreboardStartggUrlInput";
import { ModalAlert } from "../general/ModalAlert";
import { useState } from "react";

export const MatchesTable = () => {
  // Alert用のState
  const [submitOpen, setSubmitOpen] = useState(false);

  const matches = useRecoilValue(matchesAtom);
  const [selectedRowId, setSelectedRowId] =
    useRecoilState(matchesSelectedRowId);

  return (
    <RecoilRoot>
      <Box
        sx={{
          p: 2,
          bgcolor: "background.paper",
          boxShadow: 1,
          borderRadius: 2,
        }}
      >
        <Stack spacing={2}>
          {/* 更新した時のスナックバー
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          open={submitOpen}
          autoHideDuration={2000}
          onClose={handleSubmitClose}
        >
          <Alert onClose={handleSubmitClose} severity="success" sx={{ width: '100%' }}>
            StateGGの対戦表を更新しました！
          </Alert>
        </Snackbar> */}
          <ScoreboardStartggUrlInput />
          <TableContainer sx={{ width: 700, height: 365 }} component={Paper}>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell> {/* ラジオボタンのための列 */}
                  <TableCell>Round Text</TableCell>
                  <TableCell>Player 1</TableCell>
                  <TableCell>Player 2</TableCell>
                  <TableCell>Stream</TableCell>
                  <TableCell>State</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {matches.map((match, i) => (
                  <TableRow
                    key={i}
                    hover
                    onClick={() => {
                      setSelectedRowId(i);
                    }}
                  >
                    <TableCell padding="checkbox">
                      <Radio checked={selectedRowId === i} />
                    </TableCell>
                    <TableCell>{match.Round}</TableCell>
                    <TableCell>{match.Player1.name}</TableCell>
                    <TableCell>{match.Player2.name}</TableCell>
                    <TableCell>{match.Stream}</TableCell>
                    <TableCell>{match.State}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      </Box>
      <ModalAlert
        state={submitOpen}
        setState={setSubmitOpen}
        text="Update has been completed scoreboard!"
      />
    </RecoilRoot>
  );
};
