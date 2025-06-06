import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { SPLeaguesListProps } from "./SPLeaguesList.types";
import { Link } from "react-router";

const HEADERS = ["League", "Sport", "League Alternate"];

const SPLeaguesList = ({ rows, mb, mt }: SPLeaguesListProps) => {
  return (
    <TableContainer component={Paper} sx={{ mb, mt }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {HEADERS.map((label, i) => (
              <TableCell key={label}>{label}</TableCell>
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
                <Link to={`/seasons/${row.idLeague}`}>{row.strLeague}</Link>
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
