import { Alert, Snackbar } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type Props = {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
  text: string;
};

export function ModalAlert({ state, setState, text }: Props) {
  const handleSubmitClose = (
    _event?: Event | React.SyntheticEvent<Element, Event> | undefined,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setState(false);
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={state}
        autoHideDuration={2000}
        onClose={handleSubmitClose}
      >
        <Alert
          onClose={handleSubmitClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          {text}
        </Alert>
      </Snackbar>
    </>
  );
}
