import { useSetRecoilState, useRecoilValue } from "recoil";
import { scoreboardStartggUrlAtom } from "../../store/atomStartggUrl";
import { useGetSlug } from "./lib/useRequestQuery";
import { matchesAtom } from "../../store/atomScoreboard";

export function useGetMatch() {
  const setMatches = useSetRecoilState(matchesAtom);
  const url = useRecoilValue(scoreboardStartggUrlAtom);
  const { requestQuery } = useGetSlug();

  // stateの意味？ → 1:試合前,2:試合中,3:試合後
  const matchQuery = `
    query MatchOnTournament($eventSlug: String!) {
      event(slug: $eventSlug) {
        sets(perPage: 50, filters: {state: [1, 2], hideEmpty: true}) {
          nodes {
            id
            stream {
              streamName
            }
            fullRoundText
            state
            slots {
              entrant {
                name
                participants {
                    gamerTag
                    prefix
                    user {
                        authorizations (types: [TWITTER]) {
                        externalUsername
                    }
                  }
                }
              }
            }
          }
        }
      }
    }`;

  const handleGetMatches = async () => {
    try {
      const result = await requestQuery(url, matchQuery);
      console.log(result);

      const nodes = result.data.event.sets.nodes;

      const array = [];

      nodes.map((node) => {
        const name1P =
          node.slots[0].entrant === null
            ? ""
            : node.slots[0].entrant.participants[0].gamerTag;

        const team1P =
          node.slots[0].entrant === null
            ? ""
            : node.slots[0].entrant.participants[0].prefix;

        const xID1P =
          node.slots[0].entrant === null ||
          node.slots[0].entrant.participants[0].user === null
            ? ""
            : `@${node.slots[0].entrant.participants[0].user.authorizations[0].externalUsername}`;

        const name2P =
          node.slots[1].entrant === null
            ? ""
            : node.slots[1].entrant.participants[0].gamerTag;

        const team2P =
          node.slots[1].entrant === null
            ? ""
            : node.slots[1].entrant.participants[0].prefix;

        const xID2P =
          node.slots[1].entrant === null ||
          node.slots[1].entrant.participants[0].user === null
            ? ""
            : `@${node.slots[1].entrant.participants[0].user.authorizations[0].externalUsername}`;

        // const stream = nodes.stream === null ? "" : nodes.stream.streamName;
        const round = nodes.fullRoundText;
        const state = nodes.state;

        array.push({
          Player1: {
            name: name1P,
            team: team1P,
            xID: xID1P,
          },
          Player2: {
            name: name2P,
            team: team2P,
            xID: xID2P,
          },
          Round: round,
          State: state === 2 ? "In Progress" : "Waiting",
          Stream: "stream",
        });
      });

      setMatches(array);
    } catch (error) {
      console.error("StartGGのAPI取得に失敗しました:", error);
    }
  };

  // ブラケットのサンプル
  // "https://www.start.gg/tournament/in-4-1/event/ssqm/brackets/1525733/2296213"
  // "https://www.start.gg/tournament/aim-for-the-ace-championship2023/event/64/brackets/1480645/2237087"
  // "https://www.start.gg/tournament/api-test-1/event/special-1on1-ultimate-singles/brackets/1456184/2204751";
  // "https://www.start.gg/tournament/aim-for-the-ace-2nd-anniversary-cup/event/mario-tennis-aces-singles-4/brackets/806437/1295426"

  return { handleGetMatches };
}
