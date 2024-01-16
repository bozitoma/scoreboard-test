export type PlayerValue = {
  name: string;
  team: string;
  xID: string;
};

export const scoreboardDefaultValue: PlayerValue = {
  name: "",
  team: "",
  xID: "",
};

export type PlayerPort = "Player1" | "Player2" | "Player3" | "Player4";

export type ScoreboardInfo = {
  TournamentName: string;
  Round: string;
  Bestof: string;
  Player1: PlayerValue;
  Player2: PlayerValue;
  Player3: PlayerValue;
  Player4: PlayerValue;
};
