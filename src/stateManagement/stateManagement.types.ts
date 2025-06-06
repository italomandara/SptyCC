export type AppState = {
  sportFilter: string;
  leagueFilter: string;
  setSportFilter: (state: string) => void;
  setLeagueFilter: (state: string) => void;
};
