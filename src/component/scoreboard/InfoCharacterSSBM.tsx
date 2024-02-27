import { Avatar, Stack } from "@mui/material";
import { memo, useMemo } from "react";
import Select from "react-select";
import FALCO from "../../assets/falco_default.png";
// import FOX0 from "../../assets/fox0.png";
import FOX1 from "../../assets/fox1.png";
import FOX2 from "../../assets/fox2.png";
import fox3 from "../../assets/fox3.png";
import SAMUS from "../../assets/samus_default.png";

// コンポーネントのProps。初期値と選択時の関数を渡します
export type UseSelectProps = {
  selected: User | null;
  setCharacter: (user: User | null) => void;
};

// APIのレスポンスなどを想定した、User型です
export type User = {
  id: number;
  name: string;
  displayName: string;
  avatarUrl: string;
};

// 選択候補となる固定データです。実際にはAPIレスポンスなどから取得するはずです。
const sampleUsers: User[] = [
  {
    id: 1,
    name: "falco",
    displayName: "ファルコ",
    avatarUrl: FALCO,
  },
  {
    id: 2,
    name: "samus",
    avatarUrl: SAMUS,
    displayName: "サムス",
  },
  {
    id: 3,
    name: "fox0",
    avatarUrl: "../../assets/fox0.png",
    displayName: "フォックス（デフォルト）",
  },
  {
    id: 4,
    name: "fox1",
    avatarUrl: FOX1,
    displayName: "フォックス（赤）",
  },
  {
    id: 5,
    name: "fox2",
    avatarUrl: FOX2,
    displayName: "フォックス（青）",
  },
  {
    id: 6,
    name: "fox3",
    avatarUrl: fox3,
    displayName: "フォックス（緑）",
  },
];

// 選択肢を react-select にわたすための型。labelとvalueがあればよさそうですが、
// User型との相互変換のためにnameとavatarUrlも用意します。
type UserOption = {
  label: string;
  value: number;
  name: string;
  avatarUrl: string;
};

// Option型をUser型に変換します。react-select から渡されたデータをアプリで扱うために使います
function convertToUser(args: UserOption | null): User | null {
  if (!args) return null;
  return {
    id: args.value,
    name: args.name,
    displayName: args.label,
    avatarUrl: args.avatarUrl,
  };
}

// User型をOption型に変換します。react-select へデータを渡すときに変換します
function convertToOption(user: User): UserOption {
  return {
    label: user.displayName,
    value: user.id,
    name: user.name,
    avatarUrl: user.avatarUrl,
  };
}

const FormatOptionLabel = memo(({ option }: { option: UserOption }) => (
  <Stack direction="row" justifyContent="flex-start">
    <Avatar
      variant="square"
      src={option.avatarUrl}
      sx={{ width: 26, height: 26, marginRight: 1 }}
    />
    <Stack justifyContent="center">{option.label}</Stack>
  </Stack>
));

// react-select を使った、ユーザー選択コンポーネント
export const CharacertSelect = ({ setCharacter, selected }: UseSelectProps) => {
  const value = useMemo(
    () => (selected ? convertToOption(selected) : null),
    [selected]
  );

  function onChange(newUser: UserOption | null) {
    setCharacter(convertToUser(newUser));
  }

  return (
    <Select
      instanceId="CharcterSelect"
      value={value} // 選択中の値
      onChange={onChange} // 選択されたときにはしる処理
      options={sampleUsers.map(convertToOption)} // 選択肢
      formatOptionLabel={(option) => <FormatOptionLabel option={option} />}
      isClearable={true} //バツボタンを有効化
      isSearchable={true} //検索を有効化
      getOptionLabel={(option) => option.label + option.name} //検索範囲
      noOptionsMessage={() => "Dose not exit"} //検索候補がない時のメッセージ
      placeholder="Charcter"
      components={{
        IndicatorSeparator: () => null, //デフォルトのセパレーターを消去
      }}
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          width: 295,
          textAlign: "left",
        }),
      }}
    />
  );
};
