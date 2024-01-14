import { Button, Stack } from "@mui/material";
// Marerial Icons
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import ReplayIcon from "@mui/icons-material/Replay";
import { useSetRecoilState } from "recoil";
import { tournamentResultAtom } from "../../store/atomTournament";

const tournamentRoundText = [
  "WQFa",
  "WQFb",
  "WQFc",
  "WQFd",
  "WSFa",
  "WSFb",
  "WF",
  "LTOP16a",
  "LTOP16b",
  "LTOP16c",
  "LTOP16d",
  "LTOP8a",
  "LTOP8b",
  "LQFa",
  "LQFb",
  "LSF",
  "LF",
  "GF",
  "GF2",
];

export function TournamentButtons() {
  const setTournamentScore = useSetRecoilState(tournamentResultAtom);

  const reset = () => {
    tournamentRoundText.map((round) => {
      setTournamentScore((prev) => ({
        ...prev,
        [round]: {
          name1p: "",
          name2p: "",
          score1p: 0,
          score2p: 0,
        },
      }));
    });
  };

  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        color="primary"
        startIcon={<SendIcon />}
        sx={{ width: 330 }}
      >
        SUBMIT
      </Button>
      <Button
        variant="outlined"
        color="error"
        startIcon={<DeleteIcon />}
        sx={{ width: 150 }}
        onClick={reset}
      >
        RESET
      </Button>
      <Button
        variant="outlined"
        color="primary"
        startIcon={<ReplayIcon />}
        sx={{ width: 150 }}
      >
        RESTORE
      </Button>
    </Stack>
  );
}
