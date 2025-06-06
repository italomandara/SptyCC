import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { LeaguesListData } from "../types/common";

const SPLeaguesList = ({ rows }: { rows: LeaguesListData }) => {
  const headers = ["League", "Sport", "League Alternate"]; //rudimentary but ok for this use case (code challenge)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map((label) => (
              <TableCell>{label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.idLeague}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left" component="th" scope="row">
                {row.strLeague}
              </TableCell>
              <TableCell align="left">{row.strSport}</TableCell>
              <TableCell align="left">{row.strLeagueAlternate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SPLeaguesList;
