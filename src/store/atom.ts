import { atom } from "recoil";
import { tournamentResultProps } from "../types/tournamentResultDefaultValue";

export const tournamentRoundAtom = atom({
  key: "tournamentAtom",
  default: {
    WQF: "Winners Quarter",
    WSF: "Winners Semi",
    WF: "Winners Final",
    LTOP16: "Losers Top16",
    LTOP8: "Losers Top8",
    LQF: "Losers Quarter",
    LSF: "Losers Semi",
    LF: "Losers Final",
    GF: "Grand Final",
    GF2: "Grand Final set2",
  },
});

export const tournamentSetsAtom = atom({
  key: "tournamentSetsAtom",
  default: [],
});

const defaultValue = tournamentResultProps;

export const tournamentResultAtom = atom({
  key: "tournamentResultAtom",
  default: {
    WQFa: defaultValue,
    WQFb: defaultValue,
    WQFc: defaultValue,
    WQFd: defaultValue,

    WSFa: defaultValue,
    WSFb: defaultValue,

    WF: defaultValue,

    LTOP16a: defaultValue,
    LTOP16b: defaultValue,
    LTOP16c: defaultValue,
    LTOP16d: defaultValue,

    LTOP8a: defaultValue,
    LTOP8b: defaultValue,

    LQFa: defaultValue,
    LQFb: defaultValue,

    LSF: defaultValue,

    LF: defaultValue,

    GF: defaultValue,
    GF2: defaultValue,
  },
});
