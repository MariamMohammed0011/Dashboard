import { useTheme, Box, Typography } from "@mui/material";
import React from "react";

export default function NotFound() {
  const theme = useTheme();
  return (
    <Box>
      <Typography color={theme.palette.error.main} variant="h5">
        there is no design yet
        <br />
        <br />
        please try again
      </Typography>
    </Box>
  );
}
