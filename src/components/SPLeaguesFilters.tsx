import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Options } from "./SPLeaguesFilters.types";
import { useAppStore } from "../stateManagement/stateManagement";
import data from "../mocks/AllLeaguesAPI.json";

// done for convenience, options should be either coming directly from the DB (separate endpoint possibly) or a hardcoded enum/dictionary/array
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

const SPLeaguesFilters = ({
  mb,
  mt,
}: {
  mb?: number | string;
  mt?: number | string;
}) => {
  const sportFilter = useAppStore((state) => state.sportFilter);
  const leagueFilter = useAppStore((state) => state.leagueFilter);
  const setSportFilter = useAppStore((state) => state.setSportFilter);
  const setLeagueFilter = useAppStore((state) => state.setLeagueFilter);

  return (
    <Grid container spacing={2} sx={{ mb, mt }}>
      <Grid size={6}>
        <FormControl fullWidth>
          <TextField
            id="outlined-basic"
            label="League"
            variant="outlined"
            value={leagueFilter}
            onChange={(e) => setLeagueFilter(e.target.value)}
          />
        </FormControl>
      </Grid>
      <Grid size={6}>
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
      </Grid>
    </Grid>
  );
};

export default SPLeaguesFilters;
