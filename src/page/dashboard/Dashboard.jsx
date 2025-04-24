import React from 'react'
import Row1 from './Row1'
import Row2 from './Row2'
import Row3 from './Row3'
import { Button } from '@mui/material'
import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';
export default function Dashboard() {
  return (
   <div>
    <Button variant='text' color='primary' >
      <GetAppOutlinedIcon/>
      Download Reports
    </Button>
    <Row1/>
    <Row2/>
    <Row3/>
    
   </div>
  )
}
