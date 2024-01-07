import { ChangeEvent, ChangeEventHandler } from "react";
import { useRecoilState } from "recoil";
import { tournamentRoundAtom } from "../../store/atom";

export const useTournament = () => {
  const [tournamentRound, setTournamentRound] =
    useRecoilState(tournamentRoundAtom);

  const tournamentRoundEdit: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.id === "WQF") {
      setTournamentRound((prev) => ({
        ...prev,
        WQF: event.target.value,
      }));
    } else if (event.target.id === "WSF") {
      setTournamentRound((prev) => ({
        ...prev,
        WSF: event.target.value,
      }));
    } else if (event.target.id === "WF") {
      setTournamentRound((prev) => ({
        ...prev,
        WF: event.target.value,
      }));
    } else if (event.target.id === "LTOP16") {
      setTournamentRound((prev) => ({
        ...prev,
        LTOP16: event.target.value,
      }));
    } else if (event.target.id === "LTOP8") {
      setTournamentRound((prev) => ({
        ...prev,
        LTOP8: event.target.value,
      }));
    } else if (event.target.id === "LQF") {
      setTournamentRound((prev) => ({
        ...prev,
        LQF: event.target.value,
      }));
    } else if (event.target.id === "LSF") {
      setTournamentRound((prev) => ({
        ...prev,
        LSF: event.target.value,
      }));
    } else if (event.target.id === "LF") {
      setTournamentRound((prev) => ({
        ...prev,
        LF: event.target.value,
      }));
    } else if (event.target.id === "GF") {
      setTournamentRound((prev) => ({
        ...prev,
        GF: event.target.value,
      }));
    } else if (event.target.id === "GF2") {
      setTournamentRound((prev) => ({
        ...prev,
        GF2: event.target.value,
      }));
    }
  };

  return {
    tournamentRound,
    tournamentRoundEdit,
  };
};
