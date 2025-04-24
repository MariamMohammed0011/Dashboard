import { Box, Paper, Stack, Typography,useTheme } from "@mui/material";
import React from "react";
import Card from "./Card.jsx";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import TrafficOutlinedIcon from '@mui/icons-material/TrafficOutlined';
import {data1} from './DataRow1/data1.js'
import {data2} from './DataRow1/data2.js'
import {data3} from './DataRow1/data3.js'
import {data4} from './DataRow1/data4.js'
export default function Row1() {
  const theme=useTheme()
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      gap={1}
      justifyContent={{ xs: "center", sm: "space-between" }}
    >
      <Card icon={<EmailOutlinedIcon sx={{ fontSize: '23px', color: theme.palette.secondary.main }} />} title={123.11} subTitle={'Emails Sent'} increase={'+19%'} data={data1} />
      <Card icon={<PointOfSaleOutlinedIcon sx={{ fontSize: '23px', color: theme.palette.secondary.main }} />} title={32.77} subTitle={'Sales Obtained'} increase={'+80%'} data={data2} />
      <Card icon={<PersonAddOutlinedIcon sx={{ fontSize: '23px', color: theme.palette.secondary.main }} />} title={3445.99} subTitle={'New Client'} increase={'+32%'} data={data3} />
      <Card icon={<TrafficOutlinedIcon sx={{ fontSize: '23px', color: theme.palette.secondary.main }} />} title={786.88} subTitle={'Traffic Received'} increase={'+12%'} data={data4} />
      
    </Stack>
  );
}
