import { Button } from "@mui/material";
import { useCommentator } from "../../hooks/useCommentator";
import SwapVerticalCircleIcon from "@mui/icons-material/SwapVerticalCircle";
import { Commentator } from "../../types/commentatorDefaultValue";

type Props = {
  swap1: Commentator;
  swap2: Commentator;
  text: string;
};

export function CommentatorSwapButtonSolo({ swap1, swap2, text }: Props) {
  const { commentatorSwap } = useCommentator();
  return (
    <>
      <Button
        onClick={() => commentatorSwap(swap1, swap2)}
        variant="outlined"
        startIcon={<SwapVerticalCircleIcon />}
        sx={{ width: 225 }}
      >
        {text}
      </Button>
    </>
  );
}
