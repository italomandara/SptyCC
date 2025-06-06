import { Options } from "../components/SPLeaguesFilters.types";
import { LeaguesListData } from "../types/common";

export const mapWithoutDups = (data: LeaguesListData): Options => {
  const dict: { [key: string]: string } = {};
  if (typeof data === "undefined") {
    return [];
  }
  data.forEach((option) => {
    if (!dict[option.strSport]) {
      dict[option.strSport] = option.strSport;
    }
  });
  return Object.entries(dict).map(([label, value]) => ({
    label,
    value,
  }));
};

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
