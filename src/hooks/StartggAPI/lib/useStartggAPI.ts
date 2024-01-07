// 現状中の関数は使ってない
import { useStartggQuery } from './useStartggQuery';

// 大会情報を取得
export const useStateggAPI = () => {
  const { TournamentQuery, BracektQuery } = useStartggQuery();
  const fetchDataFromAPI = async () => {
    try {
      const response = await fetch('https://api.start.gg/gql/alpha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.STARTGG_API_TOKEN}`, // あなたのトークン
        },
        body: JSON.stringify({
          query: TournamentQuery,
          variables: {
            tourneySlug: 'api-test-1',
          },
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error(`API request failed with status ${response.status}: ${data.message}`);
        return null;
      }

      return data;
    } catch (error) {
      console.error('APIの呼び出し中にエラーが発生しました:', error);
      return null;
    }
  };

  // 取得した情報を整形
  const transformApiResponseToScoreboard = (response: APIResponse): TransformResult => {
    const firstSet = response.data?.tournament?.streamQueue?.[0]?.sets?.[0];

    if (!firstSet) {
      return {
        error: true,
        message: 'streamQueueが設定されていません',
      };
    }

    const RoundInfo = firstSet.slots[0]?.entrant?.paginatedSets?.nodes[0]?.fullRoundText || '';
    const player1Data = firstSet?.slots[0]?.entrant?.participants[0];
    const player2Data = firstSet?.slots[1]?.entrant?.participants[0];

    const Player1 = {
      name: player1Data?.gamerTag || 'Player1',
      prefix: player1Data?.prefix || '',
      xID: '',
      score: 0,
    };

    const Player2 = {
      name: player2Data?.gamerTag || 'Player2',
      prefix: player2Data?.prefix || '',
      xID: '',
      score: 0,
    };

    return {
      Player1,
      Player2,
      RoundInfo: RoundInfo,
    };
  };

  const getPhaseGroupId = (url: string): string => {
    if (!url.startsWith('https://www.start.gg/tournament/')) {
      return '';
    }
    const urlParts = url.split('/');
    return urlParts[9] || '';
  };

  const formatBracketResponse = (response: any): Bracket => {
    const bracketData = (response.data.phaseGroup.sets.nodes || []).map((node: any) => {
      const player1Data = node.slots[0] || {};
      const player2Data = node.slots[1] || {};

      const player1: Bracketscore = {
        prefix: player1Data.entrant?.participants[0]?.player?.prefix || '',
        name: player1Data.entrant?.participants[0]?.player?.gamerTag || '',
        score: player1Data.standing?.stats?.score?.value || 0,
      };

      const player2: Bracketscore = {
        prefix: player2Data.entrant?.participants[0]?.player?.prefix || '',
        name: player2Data.entrant?.participants[0]?.player?.gamerTag || '',
        score: player2Data.standing?.stats?.score?.value || 0,
      };

      return {
        identifier: node.identifier,
        fullRoundText: node.fullRoundText,
        player1,
        player2,
      };
    });

    return {
      bracketData,
    };
  };

  const getBracket = async (url?: string): Promise<Bracket> => {
    if (!url) {
      return { bracketData: [] };
    }
    const phaseGroupId = getPhaseGroupId(url);
    if (phaseGroupId === '') {
      return { bracketData: [] };
    }
    const variables = {
      phaseGroupId: phaseGroupId,
    };
    const res = await fetch(`https://api.smash.gg/gql/alpha`, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer b02471b232fafc5d8a67c6e1fe9afd69',
        'Content-Type': 'application/json',
        Accept: 'application/json',
        encoding: 'utf-8',
      },
      body: JSON.stringify({
        query: BracektQuery,
        variables,
      }),
    }).then((res) => res.json());

    if (res.errors) {
      console.error(res.errors);
      return { bracketData: [] };
    }

    return formatBracketResponse(res);
  };

  return { fetchDataFromAPI, transformApiResponseToScoreboard, getPhaseGroupId, getBracket };
};
