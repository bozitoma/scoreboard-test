import { Stack, TextField } from "@mui/material";
import { ChangeEventHandler } from "react";

type Props = {
  valueName: string;
  valueAccount: string;
  valueTag: string;
  number: number;
  onChangeName:
    | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  onChangeAccount:
    | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  onChangeTag:
    | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
};

export function TextBoxGroup({
  valueName,
  valueAccount,
  valueTag,
  number,
  onChangeName,
  onChangeAccount,
  onChangeTag,
}: Props) {
  return (
    <>
      <Stack spacing={2} direction="row">
        <TextField
          id={`commentator${number}-name`}
          label="Name"
          variant="standard"
          sx={{ width: 200 }}
          size="small"
          value={valueName}
          onChange={onChangeName}
        />
        <TextField
          id={`commentator${number}-account`}
          label="Account"
          variant="standard"
          sx={{ width: 200 }}
          size="small"
          value={valueAccount}
          onChange={onChangeAccount}
        />
        <TextField
          id={`commentator${number}-tag`}
          label="Tag"
          variant="standard"
          sx={{ width: 200 }}
          size="small"
          value={valueTag}
          onChange={onChangeTag}
        />
      </Stack>
    </>
  );
}
