import { Link } from "react-router";
import { SPlinkProps } from "./SPLink.types";
import { Box } from "@mui/material";

const SPLink = ({ to, children, mt, mb }: SPlinkProps) => {
  return (
    <Box mt={mt} mb={mb}>
      <Link to={to}>{children}</Link>
    </Box>
  );
};

export default SPLink;
