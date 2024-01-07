import { Button, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import { ChangeEventHandler, useState } from "react";
import { ScoreCounter } from "./counter";

export function Tournament() {
  const [tournamentRound, setTournamentRound] = useState({
    WQF: "Winners Quarter",
    WSF: "Winners Semi",
    WF: "Winners Final",
    LTOP12: "Losers Top12",
    LTOP8: "Losers Top8",
    LQF: "Losers Quarter",
    LSF: "Losers Semi",
    LF: "Losers Final",
    GF: "Grand Final",
    GF2: "Grand Final set2",
  });

  const [tournamentScore, setTournamentScore] = useState({
    WQF: {
      1: 0,
      2: 0,
    },
    WSF: {
      1: 0,
      2: 0,
    },
  });

  const tournamentRoundEdit: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.id === "WQF") {
      setTournamentRound((prev) => ({
        ...prev,
        WQF: event.target.value,
      }));
    }
  };

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
          perPage: 31
          sortType: STANDARD
        ) {
          pageInfo {
            total
          }
          nodes {
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

  const RoundInfoChange: { [key: string]: string } = {
    "Grand Final Reset": "Grand Finals",
    "Grand Final": "Grand Finals",
    "Winners Final": "Winners Finals",
    "Winners Semi-Final": "Winners Semis",
    "Winners Quarter-Final": "Winners Quarters",
    "Losers Final": "Losers Finals",
    "Losers Semi-Final": "Losers Semis",
    "Losers Quarter-Final": "Losers Quarters",
  };

  console.log(RoundInfoChange["Winners Final"]);

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

  const handleGetStreamQueue = async () => {
    try {
      const result = await getStreamQueue(
        "https://www.start.gg/tournament/in-4-1/event/ssqm/brackets/1525733/2296213"
      );

      const array = result.data.event.sets.nodes;

      // ↓ひとつの関数でまとめられそう
      const indexGrandFinal = array.findIndex(
        (data: string[][]) => data.fullRoundText === "Grand Final"
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

      setTournamentRound((prev) => ({
        ...prev,
        WQF: p1name,
      }));
    } catch (error) {
      console.error("getStreamQueue failed:", error);
    }
  };

  // レンダーを防いでおきたい

  const handleClick = () => {
    handleGetStreamQueue();
  };

  return (
    <>
      <Stack spacing={2}>
        <TextField
          id="WQF"
          label="Round"
          variant="outlined"
          sx={{ width: 200 }}
          size="small"
          value={tournamentRound.WQF}
          onChange={tournamentRoundEdit}
        />
        <TextField
          id=""
          label="Name"
          variant="outlined"
          sx={{ width: 200 }}
          size="small"
        />
        <ScoreCounter value={tournamentScore.WQF[1]} />
        <Button onClick={handleClick} variant="contained">
          Swap 2-3
        </Button>
      </Stack>
    </>
  );
}
