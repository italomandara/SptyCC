import { LeaguesListData } from "../types/common";

export const filterFn = (
  data: LeaguesListData,
  leagueFilter: string,
  sportFilter: string
): LeaguesListData => {
  return data
    .filter((item) =>
      item.strLeague
        ? item.strLeague.toLowerCase().includes(leagueFilter.toLowerCase())
        : true
    )
    .filter((item) =>
      sportFilter === "" ? true : item.strSport === sportFilter
    );
};
