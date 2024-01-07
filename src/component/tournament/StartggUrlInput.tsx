import { useRecoilState } from "recoil";
import { startggUrlAtom } from "../../store/atomStartggUrl";
import { Button, Stack, TextField } from "@mui/material";
import { ChangeEvent, ChangeEventHandler, MouseEventHandler } from "react";
import { useGetTournament } from "../../hooks/StartggAPI/useGetTournament";

export function StartggUrlInput() {
  const [url, setUrl] = useRecoilState(startggUrlAtom);

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event: ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const { handleGetSets } = useGetTournament();

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    handleGetSets();
  };
  return (
    <>
      <Stack spacing={2} direction="row">
        <TextField
          id="StartGG-URL"
          label="StartGG URL"
          variant="outlined"
          sx={{ width: 1000 }}
          size="small"
          value={url}
          onChange={handleChange}
        />
        <Button variant="contained" size="small" onClick={handleClick}>
          Submit
        </Button>
      </Stack>
    </>
  );
}
