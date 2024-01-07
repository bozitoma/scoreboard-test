import {
  Box,
  Button,
  Paper,
  Radio,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  // TextField,
} from "@mui/material";
import { ChangeEventHandler, useState } from "react";
import { usePokedex } from "../hooks/usePokedex";
import { TextBoxGroup } from "./TextBoxGroup";

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
  const [commentatorInfo, setCommentatorInfo] = useState<CommentatorInfo>({
    commentator1: {
      name: "",
      account: "",
      tag: "",
    },
    commentator2: {
      name: "",
      account: "",
      tag: "",
    },
    commentator3: {
      name: "",
      account: "",
      tag: "",
    },
    commentator4: {
      name: "",
      account: "",
      tag: "",
    },
  });
  const { pokedex } = usePokedex();

  const [selectedRowId, setSelectedRowId] = useState<number | null>(null);

  const commentatorNameEdit: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.id === "commentator1-name") {
      setCommentatorInfo((prev) => ({
        ...prev,
        commentator1: {
          ...prev.commentator1,
          name: event.target.value,
        },
      }));
    } else if (event.target.id === "commentator2-name") {
      setCommentatorInfo((prev) => ({
        ...prev,
        commentator2: {
          ...prev.commentator2,
          name: event.target.value,
        },
      }));
    } else if (event.target.id === "commentator3-name") {
      setCommentatorInfo((prev) => ({
        ...prev,
        commentator3: {
          ...prev.commentator3,
          name: event.target.value,
        },
      }));
    } else if (event.target.id === "commentator4-name") {
      setCommentatorInfo((prev) => ({
        ...prev,
        commentator4: {
          ...prev.commentator4,
          name: event.target.value,
        },
      }));
    }
  };

  const commentatorAccountEdit: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.id === "commentator1-account") {
      setCommentatorInfo((prev) => ({
        ...prev,
        commentator1: {
          ...prev.commentator1,
          account: event.target.value,
        },
      }));
    } else if (event.target.id === "commentator2-account") {
      setCommentatorInfo((prev) => ({
        ...prev,
        commentator2: {
          ...prev.commentator2,
          account: event.target.value,
        },
      }));
    } else if (event.target.id === "commentator3-account") {
      setCommentatorInfo((prev) => ({
        ...prev,
        commentator3: {
          ...prev.commentator3,
          account: event.target.value,
        },
      }));
    } else if (event.target.id === "commentator4-account") {
      setCommentatorInfo((prev) => ({
        ...prev,
        commentator4: {
          ...prev.commentator4,
          account: event.target.value,
        },
      }));
    }
  };

  const commentatorTagEdit: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.id === "commentator1-tag") {
      setCommentatorInfo((prev) => ({
        ...prev,
        commentator1: {
          ...prev.commentator1,
          tag: event.target.value,
        },
      }));
    } else if (event.target.id === "commentator2-tag") {
      setCommentatorInfo((prev) => ({
        ...prev,
        commentator2: {
          ...prev.commentator2,
          tag: event.target.value,
        },
      }));
    } else if (event.target.id === "commentator3-tag") {
      setCommentatorInfo((prev) => ({
        ...prev,
        commentator3: {
          ...prev.commentator3,
          tag: event.target.value,
        },
      }));
    } else if (event.target.id === "commentator4-tag") {
      setCommentatorInfo((prev) => ({
        ...prev,
        commentator4: {
          ...prev.commentator4,
          tag: event.target.value,
        },
      }));
    }
  };

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
          name: pokedex[selectedRowId || 0].name,
          account: pokedex[selectedRowId || 0].account,
          tag: pokedex[selectedRowId || 0].tag,
        },
      }));
    } else if (label === "commentator2") {
      setCommentatorInfo((prev) => ({
        ...prev,
        commentator2: {
          name: pokedex[selectedRowId || 0].name,
          account: pokedex[selectedRowId || 0].account,
          tag: pokedex[selectedRowId || 0].tag,
        },
      }));
    } else if (label === "commentator3") {
      setCommentatorInfo((prev) => ({
        ...prev,
        commentator3: {
          name: pokedex[selectedRowId || 0].name,
          account: pokedex[selectedRowId || 0].account,
          tag: pokedex[selectedRowId || 0].tag,
        },
      }));
    } else if (label === "commentator4") {
      setCommentatorInfo((prev) => ({
        ...prev,
        commentator4: {
          name: pokedex[selectedRowId || 0].name,
          account: pokedex[selectedRowId || 0].account,
          tag: pokedex[selectedRowId || 0].tag,
        },
      }));
    }
  };

  return (
    <Box>
      <Stack spacing={2}>
        <TextBoxGroup
          number={1}
          valueName={commentatorInfo.commentator1.name}
          valueAccount={commentatorInfo.commentator1.account}
          valueTag={commentatorInfo.commentator1.tag}
          onChangeName={commentatorNameEdit}
          onChangeAccount={commentatorAccountEdit}
          onChangeTag={commentatorTagEdit}
        />
        <TextBoxGroup
          number={2}
          valueName={commentatorInfo.commentator2.name}
          valueAccount={commentatorInfo.commentator2.account}
          valueTag={commentatorInfo.commentator2.tag}
          onChangeName={commentatorNameEdit}
          onChangeAccount={commentatorAccountEdit}
          onChangeTag={commentatorTagEdit}
        />
        <TextBoxGroup
          number={3}
          valueName={commentatorInfo.commentator3.name}
          valueAccount={commentatorInfo.commentator3.account}
          valueTag={commentatorInfo.commentator3.tag}
          onChangeName={commentatorNameEdit}
          onChangeAccount={commentatorAccountEdit}
          onChangeTag={commentatorTagEdit}
        />
        <TextBoxGroup
          number={4}
          valueName={commentatorInfo.commentator4.name}
          valueAccount={commentatorInfo.commentator4.account}
          valueTag={commentatorInfo.commentator4.tag}
          onChangeName={commentatorNameEdit}
          onChangeAccount={commentatorAccountEdit}
          onChangeTag={commentatorTagEdit}
        />
      </Stack>
      <TableContainer sx={{ maxWidth: 780, maxHeight: 490 }} component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell> {/* ラジオボタンのための列 */}
              <TableCell>Name</TableCell>
              <TableCell>Account</TableCell>
              <TableCell>Tag</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pokedex.map((row, i) => (
              <TableRow
                key={row.id}
                hover
                onClick={() => {
                  setSelectedRowId(i);
                }}
              >
                <TableCell padding="checkbox">
                  <Radio checked={selectedRowId === i} />
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.account}</TableCell>
                <TableCell>{row.tag}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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
    </Box>
  );
}
