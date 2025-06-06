import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useMemo } from "react";
import { filterFn } from "../util/filters";
import { useAppStore } from "../stateManagement/stateManagement";
import { API_URLS } from "../constants/endpoints";

export const useLeaguesData = () => {
  const sportFilter = useAppStore((state) => state.sportFilter);
  const leagueFilter = useAppStore((state) => state.leagueFilter);

  const getLeagues = async () => {
    const data = await axios.get(API_URLS.allLeagues);
    return data;
  };

  const { isPending, error, data } = useQuery({
    queryKey: ["leaguesData"],
    queryFn: getLeagues,
    staleTime: Infinity,
  });

  const rows = useMemo(() => {
    return data?.data.leagues
      ? filterFn(data!.data.leagues, leagueFilter, sportFilter)
      : [];
  }, [sportFilter, leagueFilter, data]);

  return { isPending, error, rows };
};

export const useSingleLeagueData = (id: string) => {
  const getLeagueBadges = async () => {
    const data = await axios.get(API_URLS.seasonBadge + "?badge=1&id=" + id);
    return data;
  };

  const { isPending, error, data } = useQuery({
    queryKey: ["leagueBadgesData", id],
    queryFn: getLeagueBadges,
    staleTime: 12 * 60 * 60 * 1000, // 12 hours cache
  });

  const seasons = useMemo(() => {
    return data?.data.seasons ? data!.data.seasons : [];
  }, [data]);

  return { isPending, error, seasons };
};
