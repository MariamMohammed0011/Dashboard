
import { useTheme } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid'
import { rows } from './Data'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
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
  {field:'access', headerName:'Access', flex:1 ,align:'center',headerAlign:'center',renderCell: ({ row: { access } }) => {
    return (
      <Box
        sx={{
          m: 'auto', 
          mt:1.5,
          gap: '5px',
          px: 1,
          py:0.5,
        
          width: '100px',
          borderRadius: '3px',
          textAlign: 'center',
          alignItems:'center',
          display: 'flex',
          justifyContent: 'space-evenly',
          backgroundColor:access==='Admin'? theme.palette.primary.dark :access==='Manager'? theme.palette.secondary.dark:'#3da58a' 
        }}
      >
       {access==='Admin'&& <AdminPanelSettingsOutlinedIcon fontSize='small' />} 
       {access==='Manager'&& <SecurityOutlinedIcon fontSize='small' />} 
       {access==='User'&& <LockOpenOutlinedIcon fontSize='small' />} 
        <Typography variant='body1' sx={{ fontSize: '13px' }}>{access}</Typography>
      </Box>
    );
  }
  }];
      


  return (
    <Box sx={{ height: 400, width: '98%' }}>
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
        // initialState={{
        //   pagination: {
        //     paginationModel: {
        //       pageSize: 5,
        //     },
        //   },
        // }}
        // pageSizeOptions={[5]}
        // checkboxSelection
        // disableRowSelectionOnClick
      />
    </Box>
  )
}
