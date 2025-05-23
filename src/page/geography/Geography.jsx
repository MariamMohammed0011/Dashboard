import React from "react";
import { ResponsiveChoropleth } from "@nivo/geo";
import { Box, useTheme } from "@mui/material";
import { data } from "./data.js";
import { geo } from "./world_countries.jsx";
import Header from '../../components/Header.jsx'
export default function Geography({isDashboard=false}) {
  const theme = useTheme();
  return (
    <Box>
    {isDashboard?[]:<Header title={'Geography'} subTitle={'welcome to my Geography'}  />}
    <Box sx={{borderRadius:'5px' ,height:isDashboard?'450px': "75vh" , border:isDashboard?null:`1px solid ${theme.palette.text.primary}` }}>
     
      <ResponsiveChoropleth
      projectionScale={isDashboard?70:150}
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
                  fill: theme.palette.text.secondary,
                  // "outlineWidth": 0,
                  // "outlineColor": "transparent"
                },
              },
            },
            grid: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 0,
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
        features={geo.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[0, 1000000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionTranslation={[0.5, 0.5]}
        projectionRotation={[0, 0, 0]}
        enableGraticule={false}
        graticuleLineColor="#dddddd"
        borderWidth={1.1}
        borderColor="#fff"
        // @ts-ignore
        // defs={[
        //   {
        //     id: "dots",
        //     type: "patternDots",
        //     background: "inherit",
        //     color: "#38bcb2",
        //     size: 4,
        //     padding: 1,
        //     stagger: true,
        //   },
        //   {
        //     id: "lines",
        //     type: "patternLines",
        //     background: "inherit",
        //     color: "#eed312",
        //     rotation: -45,
        //     lineWidth: 6,
        //     spacing: 10,
        //   },
        //   {
        //     id: "gradient",
        //     type: "linearGradient",
        //     colors: [
        //       {
        //         offset: 0,
        //         color: "#000",
        //       },
        //       {
        //         offset: 100,
        //         color: "inherit",
        //       },
        //     ],
        //   },
        // ]}
        // fill={[
        //   {
        //     match: {
        //       id: "CAN",
        //     },
        //     id: "dots",
        //   },
        //   {
        //     match: {
        //       id: "CHN",
        //     },
        //     id: "lines",
        //   },
        //   {
        //     match: {
        //       id: "ATA",
        //     },
        //     id: "gradient",
        //   },
        // ]}
        legends={isDashboard?[]:[
          {
            anchor: "bottom-left",
            direction: "column",
            justify: true,
            translateX: 20,
            translateY: -30,
            itemsSpacing: 0,
            itemWidth: 94,
            itemHeight: 18,
            itemDirection: "left-to-right",
            itemTextColor:theme.palette.text.primary,
            itemOpacity: 0.85,
            symbolSize: 18,
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000000",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box> </Box>
  );
}
