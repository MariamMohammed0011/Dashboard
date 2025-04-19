import * as React from 'react';
import { createTheme, styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import TopBar from './components/TopBar.jsx';
import SideBar from './components/SideBar.jsx';
import { ThemeProvider } from '@emotion/react';
import { getDesignTokens } from './theme.jsx';

    const DrawerHeader = styled('div')(({ theme }) => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
     
      ...theme.mixins.toolbar,
    }));

export default function MiniDrawer() {
  
const [mode,setMode]=React.useState(
 Boolean( localStorage.getItem("currentMode"))
  ?
  localStorage.getItem("currentMode"):'light');

 const theme=React.useMemo(()=>createTheme(getDesignTokens(mode)),[mode]);
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
 <Box sx={{ display: 'flex' }}>
      <CssBaseline />


      <TopBar  open={open} handleDrawerOpen={handleDrawerOpen} setMode={setMode}  />


<SideBar open={open} handleDrawerClose={handleDrawerClose} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography sx={{ marginBottom: 2 }}>
          Lorem ipsum 
        </Typography>

      </Box>
    </Box>
    </ThemeProvider>
   
  );
}
