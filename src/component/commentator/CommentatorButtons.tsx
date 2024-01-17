import { Button, Stack } from "@mui/material";

// Marerial Icons
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import ReplayIcon from "@mui/icons-material/Replay";
import { useSetRecoilState } from "recoil";
import { commentatorAtom } from "../../store/atomCommentator";

const Commentator = [
  "commentator1",
  "commentator2",
  "commentator3",
  "commentator4",
];

export function CommentatorButtons() {
  const setCommentatorInfo = useSetRecoilState(commentatorAtom);

  const reset = () => {
    Commentator.map((commentator) => {
      setCommentatorInfo((prev) => ({
        ...prev,
        [commentator]: {
          name: "",
          account: "",
          tag: "",
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
        sx={{ width: 340 }}
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
