import { useState } from 'react';
import { useScoreboardInfo } from '../useScoreboard';
import { useStreamQuery } from './lib/useStreamQuery';

export const useStartggTable = () => {
  const { setScoreboardInfo } = useScoreboardInfo();
  const { getStreamQueue } = useStreamQuery();

  const [url, setUrl] = useState<string | undefined>(
    'https://www.start.gg/tournament/api-test-1/event/special-1on1-ultimate-singles/brackets/1456184/2204751'
  ); // 2. URLの状態を管理
  const [streamQueue, setStreamQueue] = useState<any[]>([]);
  const [selectedRowId, setSelectedRowId] = useState<number | null>(null);

  // Submitのスナックバー
  const [submitOpen, setSubmitOpen] = useState<boolean>(false);

  const handleSubmitClose = (
    _event?: Event | React.SyntheticEvent<Element, Event> | undefined,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setSubmitOpen(false);
  };

  const handleGetStreamQueue = async () => {
    try {
      const result = await getStreamQueue(url);
      setStreamQueue(result);
      setSubmitOpen(true);
    } catch (error) {
      console.error('getStreamQueue failed:', error);
    }
  };

  const handleRowClick = async (row: any) => {
    // こちらは仮のデータマッピングです。実際のデータ構造に合わせて調整が必要かもしれません。
    setScoreboardInfo((prev) => ({
      ...prev,
      Player1: {
        name: row.p1.playerName,
        prefix: row.p1.team || '', // こちらも適切なフィールド名に変更してください
        xID: row.p1.xID || '@', // TwitterIDがxIDに変更されたとのこと
        score: row.p1.score || 0,
      },
      Player2: {
        name: row.p2.playerName,
        prefix: row.p2.team || '', // こちらも適切なフィールド名に変更してください
        xID: row.p2.xID || '@', // TwitterIDがxIDに変更されたとのこと
        score: row.p2.score || 0,
      },
      RoundInfo: row.roundText,
    }));
  };

  return {
    submitOpen,
    handleSubmitClose,
    handleGetStreamQueue,
    handleRowClick,
    url,
    setUrl,
    streamQueue,
    setStreamQueue,
    selectedRowId,
    setSelectedRowId,
    open,
  };
};
