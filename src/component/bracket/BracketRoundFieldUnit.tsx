import { Stack } from "@mui/material";
import { BracketRoundFieldSolo } from "./BracketRoundFieldSolo";
import { useBracket } from "../../hooks/useBracket";
import { TitleDivider } from "../general/TitleDivider";

type Props = {
  text: string;
  Round1: bracketRoundName;
  Round2: bracketRoundName;
  Round3: bracketRoundName;
  Round4: bracketRoundName;
  Round5: bracketRoundName;
};

export function BracketRoundFieldUnit({
  text,
  Round1,
  Round2,
  Round3,
  Round4,
  Round5,
}: Props) {
  const { bracketRound, bracketRoundEdit } = useBracket();

  return (
    <>
      <TitleDivider text={text} />
      <Stack spacing={4} direction="row">
        <BracketRoundFieldSolo
          id={Round1}
          value={bracketRound[Round1]}
          onChange={bracketRoundEdit}
        />
        <BracketRoundFieldSolo
          id={Round2}
          value={bracketRound[Round2]}
          onChange={bracketRoundEdit}
        />
        <BracketRoundFieldSolo
          id={Round3}
          value={bracketRound[Round3]}
          onChange={bracketRoundEdit}
        />
        <BracketRoundFieldSolo
          id={Round4}
          value={bracketRound[Round4]}
          onChange={bracketRoundEdit}
        />
        <BracketRoundFieldSolo
          id={Round5}
          value={bracketRound[Round5]}
          onChange={bracketRoundEdit}
        />
      </Stack>
    </>
  );
}
