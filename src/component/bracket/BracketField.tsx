import { ChangeEvent, ChangeEventHandler, MouseEventHandler } from "react";
import { BracketFieldUnit } from "./BracketFieldUnit";
import { useRecoilState } from "recoil";
import { bracketResultAtom } from "../../store/atomBracket";
import { bracketResultProps } from "../../types/bracketResultDefaultValue";
import { useGetBracket } from "../../hooks/StartggAPI/useGetBracket";

type Props = {
  roundName: bracketRoundText;
};

export function BracketField({ roundName }: Props) {
  const [bracketScore, setBracketScore] = useRecoilState(bracketResultAtom);
  const defaultValue = bracketResultProps;
  const { handleGetSets } = useGetBracket();

  // test中
  const tournamentInfoAssign: MouseEventHandler<HTMLButtonElement> = () => {
    handleGetSets();
  };

  const tournamentInfoReset: MouseEventHandler<HTMLButtonElement> = (event) => {
    const name = event.currentTarget.name;
    setBracketScore((prev) => ({
      ...prev,
      [name]: defaultValue,
    }));
  };

  const tournamentNameEdit: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event: ChangeEvent<HTMLInputElement>) => {
    const id = event.currentTarget.id;
    const idParts = id.split("-");
    const round = idParts[0];
    const key = idParts[1];
    setBracketScore((prev) => ({
      ...prev,
      [round]: {
        ...prev[round as bracketRoundText],
        [key]: event.target.value,
      },
    }));
  };

  const tournamentScoreEdit: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event: ChangeEvent<HTMLInputElement>) => {
    const id = event.currentTarget.id;
    const idParts = id.split("-");
    const round = idParts[0];
    const key = idParts[1];
    setBracketScore((prev) => ({
      ...prev,
      [round]: {
        ...prev[round as bracketRoundText],
        [key]: Number(event.target.value),
      },
    }));
  };

  return (
    <>
      <BracketFieldUnit
        // Player
        value={bracketScore}
        // Function
        onChangeName={tournamentNameEdit}
        onChangeScore={tournamentScoreEdit}
        // Button
        name={roundName}
        reset={tournamentInfoReset}
        assign={tournamentInfoAssign}
      />
    </>
  );
}
