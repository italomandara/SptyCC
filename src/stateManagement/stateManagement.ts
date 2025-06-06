import { create } from "zustand";
import { AppState } from "./stateManagement.types";

export const useAppStore = create<AppState>((set) => ({
  sportFilter: "",
  leagueFilter: "",
  setSportFilter: (value: string) => set(() => ({ sportFilter: value })),
  setLeagueFilter: (value: string) => set(() => ({ leagueFilter: value })),
}));
