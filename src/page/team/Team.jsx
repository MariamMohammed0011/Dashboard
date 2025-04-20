import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid'
import { rows } from './Data'
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';


export default function Team() {
const theme=useTheme();

const columns =[
  {field:'id', headerName:'ID', flex:1,align:'center',headerAlign:'center',width:33},
  {field:'name', headerName:'Name', flex:1 , editable: true,align:'center',headerAlign:'center'},
  {field:'email', headerName:'Email', flex:1 , editable: true,align:'center',headerAlign:'center'},
  {field:'age', headerName:'Age', flex:1 , editable: true,align:'center',headerAlign:'center'},
  {field:'phone', headerName:'Phone', flex:1 , editable: true,align:'center',headerAlign:'center'},
  {field:'access', headerName:'Access', flex:1 , editable: true,align:'center',headerAlign:'center',
    renderCell:({row:{access}})=>
      {return
        (
        <Box sx={{p:"5px",width:'99px',borderRadius:'3px',textAlign:'center',display:'flex',justifyContent:'space-evenly',backgroundColor:theme.palette.primary.dark
  }}>
   
    <AdminPanelSettingsOutlinedIcon/>
    {/* <Typography varient='body1'>{access}</Typography> */}
 
  {access}
  
  </Box>)}},
  
]

;


  return (
    <Box sx={{ height: 400, width: '100%' }}>
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
        pageSizeOptions={[5]}
        // checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  )
}
