import React from "react";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import Header from "../../components/Header.jsx";
import { Box, Button, Stack } from "@mui/material";
import GetAppOutlinedIcon from "@mui/icons-material/GetAppOutlined";
export default function Dashboard() {
  return (
    <div>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems="center"
        mb={3}
      >
        <Header
          title={"Dashboard"}
          subTitle={"welcome to my dashboard"}
          isDashboard={true}
        />
        <Box sx={{ textAlign: "right", mb: 1.3 }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ padding: "6px 8px ", textTransform: "capitalize" }}
          >
            <GetAppOutlinedIcon />
            Download Reports
          </Button>
        </Box>
      </Stack>
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
}
