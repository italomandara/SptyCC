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

const SPLeaguesList = ({ data }: { data: LeaguesListData }) => {
  const headers = ["League", "Sport", "League Alternate"]; //rudimentary but ok for a code challenge
  const rows: LeaguesListData = data; //probably need to map this later
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
              key={row.strLeague || row.strLeagueAlternate}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.strLeague}
              </TableCell>
              <TableCell align="right">{row.strSport}</TableCell>
              <TableCell align="right">{row.strLeagueAlternate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SPLeaguesList;
