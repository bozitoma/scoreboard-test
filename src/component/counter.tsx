// 参考 https://codesandbox.io/s/material-ui-counter-yo5tx?file=/src/App.js:0-1618
import { TextField, Stack, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";

// const StyledButton = styled(Button)(({ theme }) => ({
//   color: theme.palette.getContrastText(blueGrey[50]),
//   backgroundColor: blueGrey[50],
//   borderColor: blueGrey[200],
//   width: 10,
//   height: 20,
//   "&:hover": {
//     backgroundColor: blueGrey[100],
//     borderColor: blueGrey[300],
//   },
// }));

const StyledInput = styled(TextField)({
  width: 40,
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: 2,
      borderColor: blueGrey[200],
    },
    "&:hover fieldset": {
      borderColor: blueGrey[300],
    },
    "&.Mui-focused fieldset": {
      borderColor: blueGrey[500],
    },
    "& input": {
      textAlign: "center",
      color: blueGrey[700],
    },
  },
});

type Props = {
  value: number;
};

export function ScoreCounter({ value }: Props) {
  return (
    <>
      <Stack direction="row">
        <StyledInput id="gameCount1p" size="small" value={value} />
        <Stack>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Stack>
      </Stack>
    </>
  );
}
