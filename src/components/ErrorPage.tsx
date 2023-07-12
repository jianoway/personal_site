import { Box, Typography } from "@mui/material";
import { useCustomTheme } from "../utils/theme";
import { Link } from "react-router-dom";

import "./ErrorPage.scss";

const ErrorPage = () => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h1" style={{ color: theme.primary }}>
        404
      </Typography>
      <Link to="/" style={{ color: theme.primary }}>
        <Typography variant="h6">
          <code>Back to Home</code>
        </Typography>
      </Link>
    </Box>
  );
};

export default ErrorPage;
