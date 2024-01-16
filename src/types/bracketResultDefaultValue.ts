type Props = {
  name1p: string | undefined;
  name2p: string | undefined;
  score1p: number | undefined;
  score2p: number | undefined;
};

export const bracketResultProps: Props = {
  name1p: "",
  name2p: "",
  score1p: 0,
  score2p: 0,
};

export type bracketRoundList = {
  WQFa: Props;
  WQFb: Props;
  WQFc: Props;
  WQFd: Props;
  WSFa: Props;
  WSFb: Props;
  WF: Props;
  LTOP16a: Props;
  LTOP16b: Props;
  LTOP16c: Props;
  LTOP16d: Props;
  LTOP8a: Props;
  LTOP8b: Props;
  LQFa: Props;
  LQFb: Props;
  LSF: Props;
  LF: Props;
  GF: Props;
  GF2: Props;
};
