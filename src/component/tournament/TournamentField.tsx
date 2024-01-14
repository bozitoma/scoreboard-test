import { ChangeEvent, ChangeEventHandler, MouseEventHandler } from "react";
import { TournamentFieldUnit } from "./TournamentFieldUnit";
import { useRecoilState } from "recoil";
import { tournamentResultAtom } from "../../store/atomTournament";
import { tournamentResultProps } from "../../types/tournamentResultDefaultValue";
import { useGetTournament } from "../../hooks/StartggAPI/useGetTournament";

type Props = {
  roundName: tournamentRoundText;
};

export function TournamentField({ roundName }: Props) {
  const [tournamentScore, setTournamentScore] =
    useRecoilState(tournamentResultAtom);
  const defaultValue = tournamentResultProps;
  const { handleGetSets } = useGetTournament();

  // test中
  const tournamentInfoAssign: MouseEventHandler<HTMLButtonElement> = () => {
    handleGetSets();
  };

  const tournamentInfoReset: MouseEventHandler<HTMLButtonElement> = (event) => {
    const name = event.currentTarget.name;
    setTournamentScore((prev) => ({
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
    setTournamentScore((prev) => ({
      ...prev,
      [round]: {
        ...prev[round as tournamentRoundText],
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
    setTournamentScore((prev) => ({
      ...prev,
      [round]: {
        ...prev[round as tournamentRoundText],
        [key]: Number(event.target.value),
      },
    }));
  };

  return (
    <>
      <TournamentFieldUnit
        // Player
        value={tournamentScore}
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
