import TextField, { TextFieldVariants } from "@mui/material/TextField";

type Props = {
  id: string;
  label: string;
  variant: TextFieldVariants | undefined;
  width: number;
  size: "small" | "medium" | undefined;
  value?: string;
};

export function TextBox({ id, label, variant, width, size, value }: Props) {
  return (
    <>
      <TextField
        id={id}
        label={label}
        variant={variant}
        sx={{ width: { width } }}
        size={size}
        value={value}
      />
    </>
  );
}
