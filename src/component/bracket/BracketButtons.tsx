import { Button, Stack } from "@mui/material";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { bracketResultAtom } from "../../store/atomBracket";
import { matchesAtom } from "../../store/atomScoreboard";

// Marerial Icons
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import ReplayIcon from "@mui/icons-material/Replay";

const bracketRoundText = [
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

export function BracketButtons() {
  const setBracketScore = useSetRecoilState(bracketResultAtom);
  const matches = useRecoilValue(matchesAtom);

  const reset = () => {
    bracketRoundText.map((round) => {
      setBracketScore((prev) => ({
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
    <Stack direction="row" spacing={1.5}>
      <Button
        variant="contained"
        color="primary"
        startIcon={<SendIcon />}
        sx={{ width: 250 }}
      >
        SUBMIT
      </Button>
      <Button
        variant="outlined"
        color="error"
        startIcon={<DeleteIcon />}
        sx={{ width: 120 }}
        onClick={reset}
      >
        RESET
      </Button>
      <Button
        variant="outlined"
        color="primary"
        startIcon={<ReplayIcon />}
        sx={{ width: 120 }}
        onClick={() => {
          console.log(matches);
        }}
      >
        RESTORE
      </Button>
    </Stack>
  );
}
