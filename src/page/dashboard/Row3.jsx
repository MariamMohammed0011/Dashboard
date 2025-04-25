import React from "react";

import {
  Paper,
  Stack,
  Box,
  useTheme,
  Typography,
  IconButton,
} from "@mui/material";
import Pie from "../../page/pie/Pie.jsx";
import Geography from "../../page/geography/Geography.jsx";
import Bar from "../../page/bar/Bar.jsx";

export default function Row3() {
  const theme = useTheme();
  return (
    <Stack mt={3} direction={"row"} flexWrap={"wrap"} gap={1.5}>
      <Paper sx={{ flexGrow: 1, minWidth: "300px", width: "28%" }}>
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px " }}
          variant="h6"
          fontWeight={600}
        >
          Campaign
        </Typography>
        <Box
        // sx={{ border: "2px solid red" }}
        >
          <Pie isDashboard={true} />
        </Box>
        <Typography
          align="center"
          sx={{
            mt: "45px",
            //  border: "2px solid red"
          }}
          variant="h6"
          fontWeight={600}
        >
          $333,776667 revenue generated
        </Typography>
        <Typography
          px={0.7}
          pb={3}
          align="center"
          // sx={{ border: "2px solid red" }}
          variant="body2"
          fontWeight={600}
        >
          this includes the misc expanded and cost
        </Typography>
      </Paper>
      <Paper sx={{ flexGrow: 1, minWidth: "300px", width: "33%" }}>
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px " }}
          variant="h6"
          fontWeight={600}
        >
          Sales Quantity
        </Typography>
        <Bar isDashboard={true} />
      </Paper>
      <Paper sx={{ flexGrow: 1, minWidth: "300px", width: "33%" }}>
        <Geography isDashboard={true} />
      </Paper>
    </Stack>
  );
}
