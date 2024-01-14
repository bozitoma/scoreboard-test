import { Button } from "@mui/material";

import { useRecoilState, useRecoilValue } from "recoil";
import {
  commentatorAtom,
  commentatorSelectedRowId,
} from "../../store/atomCommentator";
import { useSpreadSheetAPI } from "../../hooks/useSpreadSheetAPI";

export interface CommentatorInfo {
  commentator1: Commentator;
  commentator2: Commentator;
  commentator3: Commentator;
  commentator4: Commentator;
}
export interface Commentator {
  name: string;
  account: string;
  tag: string;
}
export function TableList() {
  const selectedRowId = useRecoilValue(commentatorSelectedRowId);
  const [commentatorInfo, setCommentatorInfo] = useRecoilState(commentatorAtom);
  const { spreadSheetAPI } = useSpreadSheetAPI();

  const swap1and2 = () => {
    setCommentatorInfo((prev) => ({
      ...prev,
      commentator1: {
        name: commentatorInfo.commentator2.name,
        account: commentatorInfo.commentator2.account,
        tag: commentatorInfo.commentator2.tag,
      },
      commentator2: {
        name: commentatorInfo.commentator1.name,
        account: commentatorInfo.commentator1.account,
        tag: commentatorInfo.commentator1.tag,
      },
    }));
  };

  const swap2and3 = () => {
    setCommentatorInfo((prev) => ({
      ...prev,
      commentator2: {
        name: commentatorInfo.commentator3.name,
        account: commentatorInfo.commentator3.account,
        tag: commentatorInfo.commentator3.tag,
      },
      commentator3: {
        name: commentatorInfo.commentator2.name,
        account: commentatorInfo.commentator2.account,
        tag: commentatorInfo.commentator2.tag,
      },
    }));
  };

  const swap3and4 = () => {
    setCommentatorInfo((prev) => ({
      ...prev,
      commentator3: {
        name: commentatorInfo.commentator4.name,
        account: commentatorInfo.commentator4.account,
        tag: commentatorInfo.commentator4.tag,
      },
      commentator4: {
        name: commentatorInfo.commentator3.name,
        account: commentatorInfo.commentator3.account,
        tag: commentatorInfo.commentator3.tag,
      },
    }));
  };

  const handleRowSubmit = (label: string) => {
    if (label === "commentator1") {
      setCommentatorInfo((prev) => ({
        ...prev,
        commentator1: {
          name: spreadSheetAPI[selectedRowId || 0].name,
          account: spreadSheetAPI[selectedRowId || 0].account,
          tag: spreadSheetAPI[selectedRowId || 0].tag,
        },
      }));
    } else if (label === "commentator2") {
      setCommentatorInfo((prev) => ({
        ...prev,
        commentator2: {
          name: spreadSheetAPI[selectedRowId || 0].name,
          account: spreadSheetAPI[selectedRowId || 0].account,
          tag: spreadSheetAPI[selectedRowId || 0].tag,
        },
      }));
    } else if (label === "commentator3") {
      setCommentatorInfo((prev) => ({
        ...prev,
        commentator3: {
          name: spreadSheetAPI[selectedRowId || 0].name,
          account: spreadSheetAPI[selectedRowId || 0].account,
          tag: spreadSheetAPI[selectedRowId || 0].tag,
        },
      }));
    } else if (label === "commentator4") {
      setCommentatorInfo((prev) => ({
        ...prev,
        commentator4: {
          name: spreadSheetAPI[selectedRowId || 0].name,
          account: spreadSheetAPI[selectedRowId || 0].account,
          tag: spreadSheetAPI[selectedRowId || 0].tag,
        },
      }));
    }
  };

  return (
    <>
      <Button
        onClick={() => handleRowSubmit("commentator1")}
        variant="contained"
      >
        1
      </Button>
      <Button
        onClick={() => handleRowSubmit("commentator2")}
        variant="contained"
      >
        2
      </Button>
      <Button
        onClick={() => handleRowSubmit("commentator3")}
        variant="contained"
      >
        3
      </Button>
      <Button
        onClick={() => handleRowSubmit("commentator4")}
        variant="contained"
      >
        4
      </Button>
      <Button onClick={swap1and2} variant="contained">
        Swap 1-2
      </Button>
      <Button onClick={swap2and3} variant="contained">
        Swap 2-3
      </Button>
      <Button onClick={swap3and4} variant="contained">
        Swap 3-4
      </Button>
    </>
  );
}
