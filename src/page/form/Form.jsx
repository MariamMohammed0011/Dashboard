import { Alert, Box, Button, IconButton, MenuItem, Snackbar, Stack, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import CloseIcon from '@mui/icons-material/Close';
const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex = /^(\+?\d{1,3}[- ]?)?\d{10}$/;

const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manager",
    label: "Manager",
  },
  {
    value: "User",
    label: "User",
  },
];
export default function Form() {
  



 const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  
  const handleClick = () => {
    setOpen(true);
  };


  // const action = (
    // <React.Fragment>
    //   <Button color="secondary" size="small" onClick={handleClose}>
    //     UNDO
    //   </Button>
    //   <IconButton
    //     size="small"
    //     aria-label="close"
    //     color="inherit"
    //     onClick={handleClose}
    //   >
    //     <CloseIcon fontSize="small" />
    //   </IconButton>
    // </React.Fragment>
   
  // );







const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    console.log("done");
    handleClick()
  };












  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      noValidate
      autoComplete="off"
    >
      <Stack direction={"row"} sx={{ gap: 2 }}>
        <TextField
          error={Boolean(errors.firstName)}
          helperText={
            Boolean(errors.firstName)
              ? "This field is required & min 3 char"
              : null
          }
          {...register("firstName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="First Name"
          variant="filled"
        />
        <TextField
          error={Boolean(errors.lastName)}
          helperText={
            Boolean(errors.lastName)
              ? "This field is required & min 3 char"
              : null
          }
          {...register("lastName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="Last Name"
          variant="filled"
        />
      </Stack>

      <TextField
        error={Boolean(errors.email)}
        helperText={
          Boolean(errors.email) ? "Please provide a valid email address" : null
        }
        {...register("email", { required: true, pattern: regEmail })}
        label="Email"
        variant="filled"
      />
      <TextField
        error={Boolean(errors.phone)}
        helperText={
          Boolean(errors.phone) ? "Please provide a valid phone number" : null
        }
        {...register("phone", { required: true, pattern: phoneRegex })}
        label="Contact Number"
        variant="filled"
      />
      <TextField label="Address 1" variant="filled" />
      <TextField label="Address 2" variant="filled" />
      <TextField
        variant="filled"
        id="outlined-select-currency"
        select
        label="Role"
        defaultValue="User"
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Box sx={{ textAlign: "right" }}>
        <Button
          type="submit"
          variant="contained"
          sx={{ textTransform: "capitalize" }}
        >
          create new user
        </Button>

 <Snackbar
 anchorOrigin={{vertical:'top',horizontal:'right'}}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        // message="Note archived"
        // action={action}
       
      // />
      >
 <Alert 
 
 onClose={handleClose} severity="info" sx={{width:'100%'}}>
     Account created successfully
    </Alert>
      </Snackbar>













      </Box>
    </Box>
  );
}
