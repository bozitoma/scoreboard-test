import { atom } from "recoil";
import { scoreboardDefaultValue } from "../types/scoreboardDefaultValue";

export const infoScoreboradAtom = atom({
  key: "infoScoreboradAtom",
  default: {
    TournamentName: "",
    Round: "",
    Bestof: "",
    Player1: scoreboardDefaultValue,
    Player2: scoreboardDefaultValue,
    Player3: scoreboardDefaultValue,
    Player4: scoreboardDefaultValue,
  },
});

export const scoreAtom = atom({
  key: "scoreAtom",
  default: {
    Player1: 0,
    Player2: 0,
  },
});

export const scoreboardStartggUrlAtom = atom({
  key: "scoreboardStartggUrlAtom",
  default: "",
});

export const matchesAtom = atom<matchArray[]>({
  key: "matchesAtom",
  default: [],
});

export const matchesSelectedRowId = atom<number | undefined>({
  key: "matchesSelectedRowId",
  default: undefined,
});

export const matchesLoadingAtom = atom({
  key: "matchesLoadingAtom",
  default: false,
});

export const matchesCompletedAlertAtom = atom({
  key: "matchesCompletedAlertAtom",
  default: false,
});

export const matchesErrorAlertAtom = atom({
  key: "matchesErrorAlertAtom",
  default: false,
});
