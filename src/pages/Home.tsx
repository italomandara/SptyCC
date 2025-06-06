import SPLeaguesFilters from "../components/SPLeaguesFilters";
import SPLeaguesList from "../components/SPLeaguesList";
import { Box } from "@mui/material";
import { useLeaguesData } from "../hooks/leaguesData";
import SPPage from "../components/SPPage";

const Home = () => {
  const { isPending, error, rows } = useLeaguesData();

  if (isPending) {
    return (
      <SPPage title="Leagues List">
        <Box mt={2} mb={2}>
          Loading...
        </Box>
      </SPPage>
    );
  }

  if (error) {
    return (
      <SPPage title="Leagues List">
        <Box mt={2} mb={2}>
          Error: {error.message}
        </Box>
      </SPPage>
    );
  }

  return (
    <SPPage title="Leagues List">
      <SPLeaguesFilters mt={2} mb={2} />
      <SPLeaguesList rows={rows} mb={2} />
    </SPPage>
  );
};
export default Home;
