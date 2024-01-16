import {
  Box,
  Paper,
  Radio,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useSpreadSheetAPI } from "../../hooks/useSpreadSheetAPI";
import { useRecoilState } from "recoil";
import { commentatorSelectedRowId } from "../../store/atomCommentator";

export function CommentatorTable() {
  const { spreadSheetAPI } = useSpreadSheetAPI();

  const [selectedRowId, setSelectedRowId] = useRecoilState(
    commentatorSelectedRowId
  );

  return (
    <Box sx={{ width: 780, height: 330 }} component={Paper}>
      <TableContainer>
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
            {spreadSheetAPI.map((row, i) => (
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
    </Box>
  );
}
