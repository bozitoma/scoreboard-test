import { useRecoilState } from "recoil";
import { bracketStartggUrlAtom } from "../../store/atomStartggUrl";
import { MouseEventHandler } from "react";
import { useGetBracket } from "../../hooks/StartggAPI/useGetBracket";
import { StartggUrlInput } from "../general/StartggUrlInput";

export function BracketStartggUrlInput() {
  const [url, setUrl] = useRecoilState(bracketStartggUrlAtom);

  const { handleGetSets } = useGetBracket();

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    handleGetSets();
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
