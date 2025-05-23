import React from "react";
import { Box, Paper, Stack, Typography,useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
export default function Card({ icon, title, subTitle, data, increase,scheme }) {
  const theme=useTheme()
  return (
    <Paper

      sx={{
        minWidth: "333px",
        flexGrow:1,
        p: 1.5,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Stack direction={"column"} gap={1}>
        {icon}
        <Typography variant="body2" sx={{ fontSize: "11px" }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: "11px" }}>
          {subTitle}
        </Typography>
      </Stack>
      <Stack direction={"column"} alignItems={'center'}>
        <Box height={"70px"} width={'70px'}>
          <ResponsivePie
            data={data}
            theme={{
              // textColor: theme.palette.text.primary,
              // fontSize:11,
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
              axis: {
                domain: {
                  line: {
                    stroke: "#777777",
                    strokeWidth: 1,
                  },
                },
                legend: {
                  text: {
                    fontSize: 12,
                    fill: theme.palette.text.primary,
                    // "outlineWidth": 0,
                    // "outlineColor": "transparent"
                  },
                },
                ticks: {
                  line: {
                    stroke: theme.palette.divider,
                    strokeWidth: 1,
                  },
                  text: {
                    fontSize: 11,
                    fill: theme.palette.text.primary,
                    // "outlineWidth": 0,
                    // "outlineColor": "transparent"
                  },
                },
              },
              grid: {
                line: {
                  stroke: theme.palette.divider,
                  strokeWidth: 1,
                },
              },
              legends: {
                title: {
                  text: {
                    fontSize: 11,
                    fill: theme.palette.text.primary,
                    // "outlineWidth": 0,
                    // "outlineColor": "transparent"
                  },
                },
                text: {
                  fontSize: 11,
                  fill: theme.palette.text.primary,
                  // "outlineWidth": 0,
                  // "outlineColor": "transparent"
                },
                ticks: {
                  line: {},
                  text: {
                    fontSize: 10,
                    fill: theme.palette.text.primary,
                    // "outlineWidth": 0,
                    // "outlineColor": "transparent"
                  },
                },
              },
              annotations: {
                text: {
                  fontSize: 13,
                  fill: theme.palette.text.primary,
                  outlineWidth: 2,
                  outlineColor: "#ffffff",
                  outlineOpacity: 1,
                },
                link: {
                  stroke: theme.palette.divider,
                  strokeWidth: 1,
                  outlineWidth: 2,
                  outlineColor: "#ffffff",
                  outlineOpacity: 1,
                },
                outline: {
                  stroke: "#000000",
                  strokeWidth: 2,
                  outlineWidth: 2,
                  outlineColor: "#ffffff",
                  outlineOpacity: 1,
                },
                symbol: {
                  fill: "#000000",
                  outlineWidth: 2,
                  outlineColor: "#ffffff",
                  outlineOpacity: 1,
                },
              },
              tooltip: {
                wrapper: {},
                container: {
                  background: theme.palette.background.default,
                  color: theme.palette.text.primary,
                  fontSize: 12,
                },
                basic: {},
                chip: {},
                table: {},
                tableCell: {},
                tableCellValue: {},
              },
            }}
            margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
            innerRadius={0.7}
            colors={{scheme:scheme}}
            enableArcLabels={false}
            enableArcLinkLabels={false}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{
              from: "color",
              modifiers: [["darker", 0.2]],
            }}
            // arcLinkLabelsSkipAngle={10}
            // arcLinkLabelsTextColor="#333333"
            // arcLinkLabelsThickness={2}
            // arcLinkLabelsColor={{ from: "color" }}
            // arcLabelsSkipAngle={10}
            // arcLabelsTextColor={{
            //   from: "color",
            //   modifiers: [["darker", 2]],
            // }}
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
            fill={[
              {
                match: {
                  id: "ruby",
                },
                id: "dots",
              },
              {
                match: {
                  id: "c",
                },
                id: "dots",
              },
              {
                match: {
                  id: "go",
                },
                id: "dots",
              },
              {
                match: {
                  id: "python",
                },
                id: "dots",
              },
              {
                match: {
                  id: "scala",
                },
                id: "lines",
              },
              {
                match: {
                  id: "lisp",
                },
                id: "lines",
              },
              {
                match: {
                  id: "elixir",
                },
                id: "lines",
              },
              {
                match: {
                  id: "javascript",
                },
                id: "lines",
              },
            ]}
            // legends={[
            //   {
            //     anchor: "bottom",
            //     direction: "row",
            //     justify: false,
            //     translateX: 0,
            //     translateY: 56,
            //     itemsSpacing: 0,
            //     itemWidth: 100,
            //     itemHeight: 18,
            //     itemTextColor: "#999",
            //     itemDirection: "left-to-right",
            //     itemOpacity: 1,
            //     symbolSize: 18,
            //     symbolShape: "circle",
            //     effects: [
            //       {
            //         on: "hover",
            //         style: {
            //           itemTextColor: "#000",
            //         },
            //       },
            //     ],
            //   },
            // ]}
          />
        </Box>
        <Typography variant="body2" sx={{ fontSize: "11px" }}>
          {increase}
        </Typography>
      </Stack>
    </Paper>
  );
}
