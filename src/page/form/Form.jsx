import { Box, Stack, TextField } from '@mui/material'
import React from 'react'

export default function Form() {
  return (
    <Box
    component="form"
    sx={{
     display:'flex',flexDirection:'column' }}
    noValidate
    autoComplete="off"
  >
    <Stack direction={'row'}>
    <TextField id="filled-basic" label="First Name" variant="filled" />
    <TextField id="filled-basic" label="Last Name" variant="filled" /></Stack>

    <TextField  label="Email" variant="filled" />
    <TextField  label="Contact Number" variant="filled" />
    <TextField  label="Address1" variant="filled" />
    <TextField  label="Address2" variant="filled" />
    <TextField  label="Role" variant="filled" />
    </Box>
  )
}
