import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { tournamentResultAtom, tournamentSetsAtom } from "../../store/atom";
import { startggUrlAtom } from "../../store/atomStartggUrl";

export function useGetTournament() {
  const setTournamentScore = useSetRecoilState(tournamentResultAtom);

  const getEventSlug = (url: string): string => {
    if (!url.startsWith("https://www.start.gg/tournament/")) {
      return "";
    }
    const urlParts = url.split("/");
    if (urlParts.length < 7) {
      return "";
    }
    return `${urlParts[3]}/${urlParts[4]}/${urlParts[5]}/${urlParts[6]}`;
  };

  const getTournarySlug = (url: string): string => {
    if (!url.startsWith("https://www.start.gg/tournament/")) {
      return "";
    }
    const urlParts = url.split("/");
    return `${urlParts[3]}/${urlParts[4]}`;
  };

  //  tournament/in-4-1/event/ssqm

  const streamQueueQuery = `
    query EventSets($eventSlug: String!) {
      event(slug: $eventSlug) {
        id
        name
        sets(
          page: 1
          perPage: 500
          sortType: RECENT
        ) {
          pageInfo {
            total
          }
          nodes {
            id
            wPlacement
            lPlacement
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

  // const RoundInfoChange: { [key: string]: string } = {
  //   "Grand Final Reset": "Grand Final Reset",
  //   "Grand Final": "Grand Final",
  //   "Winners Final": "Winners Final",
  //   "Winners Semi-Final": "Winners Semi",
  //   "Winners Quarter-Final": "Winners Quarter",
  //   "Losers Final": "Losers Final",
  //   "Losers Semi-Final": "Losers Semi",
  //   "Losers Quarter-Final": "Losers Quarter",
  // };

  const getStreamQueue = async (url: string) => {
    if (!url) {
      return [];
    }
    const tournarySlug = getTournarySlug(url);
    const eventSlug = getEventSlug(url);
    if (tournarySlug === "" || eventSlug === "") {
      return [];
    }
    const variables = {
      tourneySlug: tournarySlug,
      eventSlug: eventSlug,
    };
    const res = await fetch(`https://api.smash.gg/gql/alpha`, {
      method: "POST",
      headers: {
        Authorization: "Bearer b02471b232fafc5d8a67c6e1fe9afd69",
        "Content-Type": "application/json",
        Accept: "application/json",
        encoding: "utf-8",
      },
      body: JSON.stringify({
        query: streamQueueQuery,
        variables,
      }),
    }).then((res) => res.json());
    return res;
  };

  console.log(
    getStreamQueue(
      "https://www.start.gg/tournament/smash-argentina-z-la-saga-de-hildegarn/event/saga-de-hildegarn-true/brackets/1538094/2312118"
    )
  );

  // res.data.event.sets.nodes[0].slots[0].entrant.name
  // slots[0]=トーナメント上 slots[1]=トーナメント下
  // nodes[x]=試合の場所

  // res.data.event.sets.nodes[0].slots[1].standing.stats.score.value
  // スコア

  // res.data.event.sets.nodes[0].fullRoundText
  // ラウンド名

  // console.log(
  //   getStreamQueue(
  //     "https://www.start.gg/tournament/in-4-1/event/ssqm/brackets/1525733/2296213"
  //   )
  // );

  //  https://www.start.gg/tournament/api-test-1/event/special-1on1-ultimate-singles/brackets/1456184/2204751

  // const getPokemonIcon = (name: string) => {
  //   const pokeName = pokedex.findIndex((data) => data["name"] === name);
  //   if (typeof pokeName !== "undefined") {
  //     return pokedex[pokeName];
  //   }
  // };

  const url = useRecoilValue(startggUrlAtom);
  const setSets = useSetRecoilState(tournamentSetsAtom);

  const handleGetSets = async () => {
    try {
      const result = await getStreamQueue(url);
      const array = result.data.event.sets.nodes;

      setSets(array);
    } catch (error) {
      console.error("getStreamQueue failed:", error);
    }
  };

  const handleGetStreamQueue = async () => {
    try {
      const result = await getStreamQueue(url);
      //  "https://www.start.gg/tournament/in-4-1/event/ssqm/brackets/1525733/2296213"
      // "https://www.start.gg/tournament/aim-for-the-ace-championship2023/event/64/brackets/1480645/2237087"

      const array = result.data.event.sets.nodes;

      // ↓ひとつの関数でまとめられそう
      const indexGrandFinal = array.findIndex(
        (data: string[][]) => data.fullRoundText === "Grand Final" || "Final"
      );

      const indexWinnersFinal = array.findIndex(
        (data: string[][]) => data.fullRoundText === "Winners Final"
      );

      const indexLosersFinal = array.findIndex(
        (data: string[][]) => data.fullRoundText === "Losers Final"
      );

      const grandFinal =
        result.data.event.sets.nodes[indexGrandFinal].fullRoundText;

      const p1name =
        result.data.event.sets.nodes[indexGrandFinal].slots[0].entrant.name;

      const p1score =
        result.data.event.sets.nodes[indexGrandFinal].slots[0].standing.stats
          .score.value;

      const p2name =
        result.data.event.sets.nodes[indexGrandFinal].slots[1].entrant.name;

      const p2score =
        result.data.event.sets.nodes[indexGrandFinal].slots[1].standing.stats
          .score.value;

      const winnersFinal =
        result.data.event.sets.nodes[indexWinnersFinal].fullRoundText;

      const losersFinal =
        result.data.event.sets.nodes[indexLosersFinal].fullRoundText;

      console.log(grandFinal);
      console.log(winnersFinal);
      console.log(losersFinal);
      console.log(p1name);
      console.log(p2name);
      console.log(p1score);
      console.log(p2score);

      setTournamentScore((prev) => ({
        ...prev,
        WQFa: {
          name1p: p1name,
          name2p: p2name,
          score1p: p1score,
          score2p: p2score,
        },
        WQFb: {
          name1p: p1name,
          name2p: p2name,
          score1p: p1score,
          score2p: p2score,
        },
        WQFc: {
          name1p: "test",
          name2p: p2name,
          score1p: p1score,
          score2p: p2score,
        },
        WQFd: {
          name1p: "kkkkk",
          name2p: p2name,
          score1p: p1score,
          score2p: p2score,
        },
      }));
    } catch (error) {
      console.error("getStreamQueue failed:", error);
    }
  };

  // レンダーを防いでおきたい

  return { handleGetStreamQueue, handleGetSets };
}
