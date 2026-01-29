import { TextField, Grid, Button } from "@mui/material";
import { useState } from "react";

let counter = 0;
const Profile = () => {

    console.log("Rendering for the "+ ++counter + " time")
    const [fullName,setFullName] = useState("")
  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <h2>My Profile</h2>
      </Grid>
      <Grid size={12}>
      <TextField label="Full Name" fullWidth value={fullName} onChange={(e)=>setFullName(e.target.value)}/>

      </Grid>
      <Grid size={6}>
      <TextField label="Email" fullWidth/>

      </Grid>
      <Grid size={6}>
      <TextField label="Current Title" fullWidth/>
      </Grid>
      <Grid size={12}>
        <TextField label="Bio/Summary" multiline fullWidth/>
      </Grid>
      <Grid container>
        <Button variant="contained" size="large">Save</Button>
        <Button variant="outlined" size="large">Cancel</Button>
      </Grid>
    </Grid>
  );
};

export default Profile;
