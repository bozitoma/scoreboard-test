import { Stack } from "@mui/material";
import { InfoNameSolo } from "./InfoPlayerSolo";
import { InfoTeamSolo } from "./InfoTeamSolo";
import { InfoIDSolo } from "./InfoIDSolo";
import { PlayerPort } from "../../types/scoreboardDefaultValue";
import { TitleDivider } from "../general/TitleDivider";
import { InfoPort } from "./InfoPort";
import { CharacertSelect } from "./InfoCharacterSSBM";
import { useState } from "react";
import FALCO from "../../assets/falco_default.png";

type Props = {
  port: PlayerPort;
};

type User = {
  id: number;
  name: string;
  displayName: string;
  avatarUrl: string;
};

export function InfoPlayerUnit({ port }: Props) {
  const [character, setCharacter] = useState<User | null>({
    id: 1,
    name: "falco",
    displayName: "ファルコ",
    avatarUrl: FALCO,
  });
  return (
    <Stack spacing={1}>
      <TitleDivider text={port} />
      <InfoNameSolo port={port} />
      <Stack direction="row" spacing={0.5}>
        <InfoTeamSolo port={port} />
        <InfoIDSolo port={port} />
      </Stack>
      <CharacertSelect setCharacter={setCharacter} selected={character} />
      <InfoPort port={port} />
    </Stack>
  );
}
