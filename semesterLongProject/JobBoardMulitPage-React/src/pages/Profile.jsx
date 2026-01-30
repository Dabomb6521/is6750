import { TextField, Grid, Button } from "@mui/material";
import { useRef, useState } from "react";

let counter = 0;
const Profile = () => {
  const fullNameRef = useRef();
  const emailRef = useRef();
  const titleRef = useRef();
  const bioRef = useRef();

  const [profiles, setProfiles] = useState([]);
  console.log("Rendering for the " + ++counter + " time");

  function handleClick() {
    setProfiles((old) => [
      ...old,
      {
        fullName: fullNameRef.current.value,
        email: emailRef.current.value,
        title: titleRef.current.value,
        bio: bioRef.current.value,
      },
    ]);

    // Clear the input fields
    fullNameRef.current.value = "";
    emailRef.current.value = "";
    titleRef.current.value = "";
    bioRef.current.value = "";

    // Focus on the first field
    fullNameRef.current.focus();
  }

  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <h2>My Profile</h2>
      </Grid>
      <Grid size={12}>
        <TextField label="Full Name" fullWidth inputRef={fullNameRef} />
      </Grid>
      <Grid size={6}>
        <TextField label="Email" fullWidth inputRef={emailRef} />
      </Grid>
      <Grid size={6}>
        <TextField label="Current Title" fullWidth inputRef={titleRef} />
      </Grid>
      <Grid size={12}>
        <TextField label="Bio/Summary" multiline fullWidth inputRef={bioRef} />
      </Grid>
      <Grid container>
        <Button variant="contained" size="large" onClick={handleClick}>
          Save
        </Button>
        <Button variant="outlined" size="large">
          Cancel
        </Button>
      </Grid>
      <Grid container size={12}>
        {profiles.map((item) => (
          <Grid size={4} key={item.title}>
            <h1>{item.fullName}</h1>
            <h4>
              {item.title} - {item.email}
            </h4>
            <p>{item.bio}</p>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Profile;
