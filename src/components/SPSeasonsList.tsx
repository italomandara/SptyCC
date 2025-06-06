import { Grid } from "@mui/material";
import { SPSeasonsListProps } from "./SPSeasonsList.types";
import SPCard from "./SPCard";

const HEADERS = ["Season", "Badge"];

const SPSeasonsList = ({ rows, mb, mt }: SPSeasonsListProps) => {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }}>
      {rows.map(({ strBadge, strSeason }) => (
        <Grid size={{ xs: 6, sm: 4, md: 3 }}>
          <SPCard src={strBadge} text={strSeason} />
        </Grid>
      ))}
    </Grid>
  );
};

export default SPSeasonsList;
