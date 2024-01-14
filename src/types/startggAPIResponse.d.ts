interface phaseGroupAPIResponse {
  // あなたのAPIレスポンスの型定義
  data: {
    phaseGroup: {
      bracketType: string;
      id: number;
      sets: {
        nodes: Array<phaseGroupNodesAPIResponse>;
      };
    };
  };
}

interface phaseGroupNodesAPIResponse {
  // あなたのAPIレスポンスの型定義
  fullRoundText: string;
  id: number;
  slots: Array<{
    entrant: {
      name: string;
    };
    standing: {
      placement: number;
      stats: {
        score: {
          value: number | null;
        };
      };
    };
  }>;
}
