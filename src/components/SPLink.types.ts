import { PropsWithChildren } from "react";
import { LeaguesListData } from "../types/common";

export type SPlinkProps = PropsWithChildren<{
  to: string;
  mt?: number | string;
  mb?: number | string;
}>;
