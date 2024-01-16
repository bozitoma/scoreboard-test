import { useRecoilState } from "recoil";
import { scoreboardStartggUrlAtom } from "../../store/atomStartggUrl";
import { MouseEventHandler } from "react";
import { StartggUrlInput } from "../general/StartggUrlInput";
import { useGetMatch } from "../../hooks/StartggAPI/useGetMatch";

export function ScoreboardStartggUrlInput() {
  const [url, setUrl] = useRecoilState(scoreboardStartggUrlAtom);

  const { handleGetMatches } = useGetMatch();

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    handleGetMatches();
  };

  return (
    <>
      <StartggUrlInput
        url={url}
        setUrl={setUrl}
        onClick={handleClick}
        width={600}
      />
    </>
  );
}
