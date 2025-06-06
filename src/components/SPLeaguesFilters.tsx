import {
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Toolbar,
} from "@mui/material";
import { Options } from "./SPLeaguesFilters.types";
import { useAppStore } from "../stateManagement/stateManagement";
import data from "../mocks/AllLeaguesAPI.json";

// done for convenience, options should be either coming from the DB or an enum
const mapWithoutDups = (): Options => {
  const dict: { [key: string]: string } = {};
  data.leagues.forEach((option) => {
    if (!dict[option.strSport]) {
      dict[option.strSport] = option.strSport;
    }
  });
  return Object.entries(dict).map(([label, value]) => ({
    label,
    value,
  }));
};

const options: Options = mapWithoutDups();

const SPLeaguesFilters = () => {
  const sportFilter = useAppStore((state) => state.sportFilter);
  const leagueFilter = useAppStore((state) => state.leagueFilter);
  const setSportFilter = useAppStore((state) => state.setSportFilter);
  const setLeagueFilter = useAppStore((state) => state.setLeagueFilter);

  const handleChange = () => {};
  return (
    <Toolbar>
      <FormControl fullWidth>
        <TextField
          id="outlined-basic"
          label="League"
          variant="outlined"
          value={leagueFilter}
          onChange={(e) => setLeagueFilter(e.target.value)}
        />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sport</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sportFilter}
          label="Age"
          onChange={(e) => setSportFilter(e.target.value)}
        >
          <MenuItem value="">Select a Sport</MenuItem>
          {options.map(({ label, value }) => (
            <MenuItem value={value}>{label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Toolbar>
  );
};

export default SPLeaguesFilters;
