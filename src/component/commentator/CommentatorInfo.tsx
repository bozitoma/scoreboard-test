import { Stack } from "@mui/material";
import { CommentatorInfoUnit } from "./CommentatorInfoUnit";
import { CommentatorSwapButtons } from "./CommentatorSwapButtons";
import { CommentatorButtons } from "./CommentatorButtons";

export function CommentatorInfo() {
  return (
    <Stack spacing={2}>
      <CommentatorInfoUnit commentator="commentator1" />
      <CommentatorInfoUnit commentator="commentator2" />
      <CommentatorInfoUnit commentator="commentator3" />
      <CommentatorInfoUnit commentator="commentator4" />
      <CommentatorSwapButtons />
      <CommentatorButtons />
    </Stack>
  );
}
