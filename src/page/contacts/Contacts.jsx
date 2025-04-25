import React, { useState } from 'react';
import {
  Box,
  MenuItem,
  Select,
  TextField,
  Button,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { rows, columns } from './data';
import Header from '../../components/Header.jsx'
export default function CustomFilterGrid() {
  const [filterColumn, setFilterColumn] = useState('name');
  const [filterValue, setFilterValue] = useState('');
  const [filterOperator, setFilterOperator] = useState('contains');
  const [filteredRows, setFilteredRows] = useState(rows);

  const handleFilter = () => {
    let filtered = [...rows];
    filtered = filtered.filter((row) => {
      const cellValue = row[filterColumn]?.toString().toLowerCase();
      const filter = filterValue.toLowerCase();

      if (filterOperator === 'contains') return cellValue?.includes(filter);
      if (filterOperator === 'equals') return cellValue === filter;
      if (filterOperator === 'startsWith') return cellValue?.startsWith(filter);
      return true;
    });

    setFilteredRows(filtered);
  };

  const resetFilter = () => {
    setFilterValue('');
    setFilteredRows(rows);
  };
  const handleExport = () => {
        const csv = [
          columns.map((col) => col.headerName).join(','),
          ...filteredRows.map((row) =>
            columns.map((col) => `"${row[col.field] ?? ''}"`).join(',')
          ),
        ].join('\n');
    
        const blob = new Blob([csv], { type: 'text/csv' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'contacts.csv';
        link.click();
      };
  return (
    <Box sx={{height:400, width: '98%', mx: 'auto', mt: 2 }}>
      <Header title={'Contact'} subTitle={'welcome to my Contact'} />
      {/* Filter Controls */}
 
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <Select
          size="small"
          value={filterColumn}
          onChange={(e) => setFilterColumn(e.target.value)}
        >
          {columns.map((col) => (
            <MenuItem key={col.field} value={col.field}>
              {col.headerName}
            </MenuItem>
          ))}
        </Select>

        <Select
          size="small"
          value={filterOperator}
          onChange={(e) => setFilterOperator(e.target.value)}
        >
          <MenuItem value="contains">Contains</MenuItem>
          <MenuItem value="equals">Equals</MenuItem>
          <MenuItem value="startsWith">Starts With</MenuItem>
        </Select>

        <TextField
          size="small"
          label="Filter value"
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        />

        <Button variant="contained" onClick={handleFilter}>
          Apply
        </Button>
        <Button variant="outlined" onClick={resetFilter}>
          Reset
        </Button>
        <Button variant="outlined" onClick={handleExport}  >
       Export CSV
        </Button>
        
      </Box>
     
      {/* Data Grid */}
      <DataGrid
        rows={filteredRows}
        // @ts-ignore
        columns={columns}
         initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        // pageSize={5}
        // rowsPerPageOptions={[5, 10, 20]}
        // disableRowSelectionOnClick
        autoHeight
      />
    </Box>
  );
}
