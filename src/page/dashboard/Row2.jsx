import {
  Paper,
  Stack,
  Box,
  useTheme,
  Typography,
  IconButton,
} from "@mui/material";
import Line from "../../page/line/Line.jsx";
import React from "react";
import GetAppOutlinedIcon from "@mui/icons-material/GetAppOutlined";
import { FormatAlignJustify } from "@mui/icons-material";
import { transaction } from "./DataRow1/data5.js";

export default function Row2() {
  const theme = useTheme();
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1.5} mt={2}>
      <Paper sx={{
        //  border: "2px solid red",
          maxWidth: 900,minWidth:'300px', flexGrow: 1 }}>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <Typography
              color={theme.palette.secondary.main}
              mb={1}
              mt={2}
              ml={4}
              variant="h6"
            >
              Revenue Generated
            </Typography>
            <Typography ml={4} variant="body2">
              $333,777,865
            </Typography>
          </Box>
          <Box>
            <IconButton sx={{ mr: 3 }}>
              <GetAppOutlinedIcon />
            </IconButton>
          </Box>
        </Stack>
        <Line isDashboard={true} />
      </Paper>
      <Box
        sx={{
          overflow: "auto",
          // border: "2px solid red",
          // maxHeight: 380,
          height:350,
          minWidth: "280px",
          flexGrow: 1,
        }}
      >
        <Paper>
          <Typography
            color={theme.palette.secondary.main}
            p={1.2}
            fontWeight={"bold"}
            variant="h6"
          >
            Recenet Transactions
          </Typography>
        </Paper>
        {transaction.map((item) => {
          return (
            <Paper
              sx={{
                mt: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box p={1.2}>
                <Typography fontWeight="600" variant="body1">
                  {item.txtId}
                </Typography>
                <Typography variant="body2">{item.user}</Typography>
              </Box>
              <Typography variant="body1">{item.data}</Typography>
              <Typography
                p={1}
                borderRadius={1.4}
                bgcolor={theme.palette.error.main}
                color={theme.palette.getContrastText(theme.palette.error.main)}
                variant="body2"
              >
                {item.cost}
              </Typography>
            </Paper>
          );
        })}
      </Box>
    </Stack>
  );
}
