import { Container } from "@mui/material";
import { PropsWithChildren } from "react";

const SPContainer = ({ children }: PropsWithChildren) => {
  return <Container maxWidth="md">{children}</Container>;
};

export default SPContainer;
