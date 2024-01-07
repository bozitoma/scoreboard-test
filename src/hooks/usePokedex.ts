import { useEffect, useState } from "react";

type Props = {
  [key: string]: string;
};

export function usePokedex() {
  // 整形したポケモン図鑑を格納するステート
  const [pokedex, setPokedex] = useState<Props[]>([]);

  // ポケモン図鑑の表のヘッダーをKeyに整形する関数
  const CsvDic = (props: string[][]) => {
    const [header, ...rows] = props;
    const newPokedex: Props[] = rows.map((row: string[]) =>
      row.reduce(
        (acc: object, cell: string, i: number) => ({
          ...acc,
          [header[i]]: cell,
        }),
        {}
      )
    );
    return newPokedex;
  };

  // ページ読み込み時にポケモン図鑑の表を読み込む
  useEffect(() => {
    fetch(
      "https://sheets.googleapis.com/v4/spreadsheets/1TqdCdct1gkf7vbM7bNi1iXyZnQnkC1i9h60kmfbMXNw/values/list?key=AIzaSyDDds7LWxpwDzKKMzMs54m4pr1xryX6N1s"
    )
      .then((res) => res.json())
      .then((datas) => setPokedex(CsvDic(datas.values)));
  }, []);

  // ポケモン図鑑の名前をリストにした関数
  const POKEDEX = pokedex.map((obj) => obj.name);

  return { pokedex, POKEDEX };
}
// https://sheets.googleapis.com/v4/spreadsheets/1TqdCdct1gkf7vbM7bNi1iXyZnQnkC1i9h60kmfbMXNw/values/list?key=AIzaSyDDds7LWxpwDzKKMzMs54m4pr1xryX6N1s
// https://docs.google.com/spreadsheets/d/1TqdCdct1gkf7vbM7bNi1iXyZnQnkC1i9h60kmfbMXNw/edit#gid=0

// const { pokedex, POKEDEX } = usePokedex();
