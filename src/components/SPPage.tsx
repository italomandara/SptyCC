import { PropsWithChildren } from "react";
import { Typography } from "@mui/material";

const SPPage = ({ title, children }: PropsWithChildren<{ title: string }>) => {
  return (
    <>
      <Typography variant="h3">{title}</Typography>
      {children}
    </>
  );
};

export default SPPage;
