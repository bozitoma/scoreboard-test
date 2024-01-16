import { SetterOrUpdater } from "recoil";
import { Button, Stack, TextField } from "@mui/material";
import { ChangeEvent, ChangeEventHandler, MouseEventHandler } from "react";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

type Props = {
  url: string;
  setUrl: SetterOrUpdater<string>;
  onClick: MouseEventHandler<HTMLButtonElement>;
  width: number;
};

export function StartggUrlInput({ url, setUrl, onClick, width }: Props) {
  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event: ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  return (
    <Stack spacing={1} direction="row">
      <TextField
        id="StartGG-URL"
        label="StartGG URL"
        variant="outlined"
        sx={{ width: width }}
        size="small"
        value={url}
        onChange={handleChange}
      />
      <Button
        variant="contained"
        size="small"
        startIcon={<FileDownloadIcon />}
        onClick={onClick}
      >
        INPORT
      </Button>
    </Stack>
  );
}
