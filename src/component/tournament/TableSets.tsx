import {
  Box,
  Button,
  Paper,
  Radio,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  // TextField,
} from "@mui/material";
import {
  ChangeEvent,
  ChangeEventHandler,
  MouseEventHandler,
  useState,
} from "react";
import { useGetTournament } from "../../hooks/StartggAPI/useGetTournament";
import { useRecoilState, useRecoilValue } from "recoil";
import { startggUrlAtom } from "../../store/atomStartggUrl";
import { tournamentSetsAtom } from "../../store/atom";
import { TournamentButtons } from "./TournamentButtons";

export interface CommentatorInfo {
  commentator1: Commentator;
  commentator2: Commentator;
  commentator3: Commentator;
  commentator4: Commentator;
}
export interface Commentator {
  name: string;
  account: string;
  tag: string;
}
export function TableSets() {
  const [selectedRowId, setSelectedRowId] = useState<number | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sets = useRecoilValue(tournamentSetsAtom);
  const { handleGetSets } = useGetTournament();

  const [url, setUrl] = useRecoilState(startggUrlAtom);

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event: ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    handleGetSets();
  };

  return (
    <Box component={Paper} sx={{ p: 2 }}>
      <Stack spacing={2} direction="row">
        <TournamentButtons />
        <Stack spacing={2}>
          <Stack spacing={2} direction="row">
            <TextField
              id="StartGG-URL"
              label="StartGG URL"
              variant="outlined"
              sx={{ width: 674 }}
              size="small"
              value={url}
              onChange={handleChange}
            />
            <Button variant="contained" size="small" onClick={handleClick}>
              Submit
            </Button>
          </Stack>
          <TableContainer sx={{ width: 760, height: 330 }} component={Paper}>
            <Table stickyHeader size="small">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell> {/* ラジオボタンのための列 */}
                  <TableCell>Round</TableCell>
                  <TableCell>Player1</TableCell>
                  <TableCell>Player2</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sets.map((row, i) => (
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
                    <TableCell>
                      {row.fullRoundText !== null
                        ? row.fullRoundText
                        : "undefind"}
                    </TableCell>
                    <TableCell>
                      {row.slots[0].entrant !== null
                        ? row.slots[0].entrant.name
                        : "undefind"}
                    </TableCell>
                    <TableCell>
                      {row.slots[1].entrant !== null
                        ? row.slots[1].entrant.name
                        : "undefind"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      </Stack>
    </Box>
  );
}
