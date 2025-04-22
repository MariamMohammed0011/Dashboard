import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { rows,columns } from './data.js'
import React from 'react'

export default function Invoices() {
  return (
   <Box sx={{ height: 400, width: '98%',mx:'auto' }}>
        <DataGrid
          rows={rows}
          // @ts-ignore
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          // pageSizeOptions={[5]}
          checkboxSelection
          // disableRowSelectionOnClick
        />
      </Box>
  )
}
