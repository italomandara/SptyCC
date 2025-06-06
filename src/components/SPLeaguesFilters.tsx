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

const SPLeaguesFilters = () => {
  const sportFilter = useAppStore((state) => state.sportFilter);
  const leagueFilter = useAppStore((state) => state.leagueFilter);

  const options: Options = [{ label: "", value: "" }];
  const handleChange = () => {};
  return (
    <Toolbar>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">League</InputLabel>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          value={leagueFilter}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sport</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sportFilter}
          label="Age"
          onChange={handleChange}
        >
          {options.map(({ label, value }) => (
            <MenuItem value={value}>{label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Toolbar>
  );
};

export default SPLeaguesFilters;
