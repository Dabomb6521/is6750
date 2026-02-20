import { TextField, Grid, Button, CircularProgress } from "@mui/material";
import { useRef, use } from "react";
import ProfileContext from "../store/ProfileContext";

let counter = 0;
const Profile = () => {

    const {profileHistory:history,loading, error, deleteFunc} = use(ProfileContext)
    const fullNameRef = useRef();
    const emailRef = useRef();
    const titleRef = useRef();
    const bioRef = useRef();
    
    const updateHistory = ()=>{
      setHistory(old=>([...old,{
        fullName:fullNameRef.current.value,
        email:emailRef.current.value,
        title:titleRef.current.value,
        bio:bioRef.current.value,
      }]));

      fullNameRef.current.value = "";
      emailRef.current.value = "";
      titleRef.current.value = "";
      bioRef.current.value = "";

      fullNameRef.current.focus();
    }
    
    console.log("Rendering for the "+ ++counter + " time")
  return (
    <>
    <Grid container spacing={2}>
      <Grid size={12}>
        <h2>My Profile</h2>
      </Grid>
      <Grid size={12}>
      <TextField label="Full Name" fullWidth inputRef={fullNameRef}/>

      </Grid>
      <Grid size={6}>
      <TextField label="Email" fullWidth inputRef={emailRef}/>

      </Grid>
      <Grid size={6}>
      <TextField label="Current Title" fullWidth inputRef={titleRef}/>
      </Grid>
      <Grid size={12}>
        <TextField label="Bio/Summary" multiline fullWidth inputRef={bioRef}/>
      </Grid>
      <Grid container>
        <Button variant="contained" size="large" onClick={updateHistory}>Save</Button>
        <Button variant="outlined" size="large">Cancel</Button>
      </Grid>
      <Grid container size={12}>
        {loading && <CircularProgress />}
        {!loading && history.map(item=>(
        <Grid size={4} key={item.title}>
          <h1>{item.fullName}</h1>
          <h4>{item.title} - {item.email}</h4>
          <p>{item.bio}</p>
        </Grid>
        ))}
        {!loading && error && <h1>{error.message}</h1>}

      </Grid>
    </Grid>
      </>
  );
};

export default Profile;
