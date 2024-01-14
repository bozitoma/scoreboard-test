import { ChangeEventHandler } from "react";
import { CommentatorInfoSolo } from "./CommentatorInfoSolo";
import { useRecoilState } from "recoil";
import { commentatorAtom } from "../../store/atomCommentator";
import { Commentator } from "../../types/commentatorDefaultValue";

type Props = {
  commentator: Commentator;
};

export function CommentatorInfoUnit({ commentator }: Props) {
  const [commentatorInfo, setCommentatorInfo] = useRecoilState(commentatorAtom);

  const commentatorNameEdit: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.id === `${commentator}-name`) {
      setCommentatorInfo((prev) => ({
        ...prev,
        [commentator]: {
          ...prev[commentator],
          name: event.target.value,
        },
      }));
    }
  };

  const commentatorAccountEdit: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.id === `${commentator}-account`) {
      setCommentatorInfo((prev) => ({
        ...prev,
        [commentator]: {
          ...prev[commentator],
          account: event.target.value,
        },
      }));
    }
  };

  const commentatorTagEdit: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.id === `${commentator}-tag`) {
      setCommentatorInfo((prev) => ({
        ...prev,
        [commentator]: {
          ...prev[commentator],
          tag: event.target.value,
        },
      }));
    }
  };

  return (
    <>
      <CommentatorInfoSolo
        commentator={commentator}
        value={commentatorInfo}
        onChangeName={commentatorNameEdit}
        onChangeAccount={commentatorAccountEdit}
        onChangeTag={commentatorTagEdit}
      />
    </>
  );
}
