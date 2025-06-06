import { useMemo } from "react";
import SPLeaguesFilters from "../components/SPLeaguesFilters";
import SPLeaguesList from "../components/SPLeaguesList";
import data from "../mocks/AllLeaguesAPI.json";
import { useAppStore } from "../stateManagement/stateManagement";
import { filterFn } from "../util/filters";
const Home = () => {
  const sportFilter = useAppStore((state) => state.sportFilter);
  const leagueFilter = useAppStore((state) => state.leagueFilter);
  const rows = useMemo(() => {
    return filterFn(data.leagues, leagueFilter, sportFilter);
  }, [sportFilter, leagueFilter]);
  return (
    <div className="home">
      <SPLeaguesFilters />
      <SPLeaguesList rows={rows} />
    </div>
  );
};
export default Home;
