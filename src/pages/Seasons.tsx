import { Link, useParams } from "react-router";
import { useSingleLeagueData } from "../hooks/leaguesData";
import { Box } from "@mui/material";
import SPLeaguesList from "../components/SPLeaguesList";
import SPSeasonsList from "../components/SPSeasonsList";
import SPLink from "../components/SPLink";
import SPPage from "../components/SPPage";

// ?badge=1&id=4344
const Seasons = () => {
  const { id } = useParams();
  const { isPending, error, seasons } = useSingleLeagueData(id || "0");

  if (isPending) {
    return (
      <SPPage title="Seasons List">
        <Box mt={2} mb={2}>
          Loading...
        </Box>
      </SPPage>
    );
  }

  if (error) {
    return (
      <SPPage title="Seasons List">
        <Box mt={2} mb={2}>
          Error: {error.message}
        </Box>
      </SPPage>
    );
  }

  return (
    <SPPage title="Seasons List">
      <SPLink to="/" mb={2}>
        Home
      </SPLink>
      <SPSeasonsList rows={seasons} mt={2} mb={2} />
    </SPPage>
  );
};
export default Seasons;
