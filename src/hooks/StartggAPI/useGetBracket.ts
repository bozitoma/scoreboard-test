import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  bracketCompletedAlertAtom,
  bracketErrorAlertAtom,
  bracketLoadingAtom,
  bracketResultAtom,
  bracketStartggUrlAtom,
} from "../../store/atomBracket";
import { useGetSlug } from "./useRequestQuery";

export function useGetBracket() {
  const setBracketScore = useSetRecoilState(bracketResultAtom);
  const setIsLoading = useSetRecoilState(bracketLoadingAtom);
  const setCompletedAlert = useSetRecoilState(bracketCompletedAlertAtom);
  const setErrorAlert = useSetRecoilState(bracketErrorAlertAtom);

  const url = useRecoilValue(bracketStartggUrlAtom);
  const { requestQuery } = useGetSlug();

  const phaseGroupSetsQuery = `
    query PhaseGroupSets($phaseGroupId: ID!) {
      phaseGroup(id: $phaseGroupId) {
        id
        bracketType
        sets(page: 1, perPage: 19, sortType: NONE)  {
          nodes {
            id
            fullRoundText
            slots {
              standing {
                placement
                stats {
                  score {
                    value
                  }
                }
              }
              entrant {
                name
              }
            }
          }
        }
      }
    }`;

  const grandFinalBracket = ["GF", "GF2"];
  const winnersBracket = ["WF", "WSFb", "WSFa", "WQFd", "WQFc", "WQFb", "WQFa"];
  const losersBracket = [
    "LF",
    "LSF",
    "LQFb",
    "LQFa",
    "LTOP8b",
    "LTOP8a",
    "LTOP16d",
    "LTOP16c",
    "LTOP16b",
    "LTOP16a",
  ];

  const handleGetSets = async () => {
    // ボタンのローディング開始
    setIsLoading(true);

    try {
      const result: phaseGroupAPIResponse = await requestQuery(
        url,
        phaseGroupSetsQuery
      );

      const bracketType = result.data.phaseGroup.bracketType;
      const nodes = result.data.phaseGroup.sets.nodes;

      // APIの結果を格納する配列
      const GF: Array<phaseGroupNodesAPIResponse> = [];
      const WF: Array<phaseGroupNodesAPIResponse> = [];
      const LF: Array<phaseGroupNodesAPIResponse> = [];

      nodes.map((node) => {
        const round = node.fullRoundText;
        if (bracketType === "DOUBLE_ELIMINATION") {
          if (round.includes("Grand")) {
            GF.push(node);
          } else if (round.includes("Winners")) {
            WF.push(node);
          } else if (round.includes("Losers")) {
            LF.push(node);
          }
        } else if (bracketType === "SINGLE_ELIMINATION") {
          if (round.includes("3rd Place Tiebreak")) {
            GF.push(node);
          } else if (round.includes("Final")) {
            WF.push(node);
          }
        }
      });

      const applyBracket = (
        round: string[],
        array: Array<phaseGroupNodesAPIResponse>
      ) => {
        if (array === GF) {
          array.sort((a, b) => a.id - b.id); //GFはResetがあるかないか不明瞭なので、GF2よりGFを配列[0]にする
        } else {
          array.sort((a, b) => b.id - a.id);
        }

        round.map((x, i) => {
          if (array[i] === undefined) {
            return;
          }
          setBracketScore((prev) => ({
            ...prev,
            [x]: {
              name1p:
                array[i].slots[0].entrant === null
                  ? ""
                  : array[i].slots[0].entrant.name,
              name2p:
                array[i].slots[1].entrant === null
                  ? ""
                  : array[i].slots[1].entrant.name,
              score1p:
                array[i].slots[0].standing === null ||
                array[i].slots[0].standing.stats.score.value === null
                  ? 0
                  : array[i].slots[0].standing.stats.score.value,
              score2p:
                array[i].slots[1].standing === null ||
                array[i].slots[1].standing.stats.score.value === null
                  ? 0
                  : array[i].slots[1].standing.stats.score.value,
            },
          }));
        });
      };

      applyBracket(grandFinalBracket, GF);
      applyBracket(winnersBracket, WF);
      applyBracket(losersBracket, LF);

      setCompletedAlert(true);
    } catch (error) {
      console.error("StartGGのAPI取得に失敗しました:", error);
      setErrorAlert(true);
    }

    // ボタンのローディング終了
    setIsLoading(false);
  };

  return { handleGetSets };
}

// ブラケットのサンプル
// "https://www.start.gg/tournament/in-4-1/event/ssqm/brackets/1525733/2296213"
// "https://www.start.gg/tournament/aim-for-the-ace-championship2023/event/64/brackets/1480645/2237087"
// "https://www.start.gg/tournament/api-test-1/event/special-1on1-ultimate-singles/brackets/1456184/2204751";
// "https://www.start.gg/tournament/aim-for-the-ace-2nd-anniversary-cup/event/mario-tennis-aces-singles-4/brackets/806437/1295426"
