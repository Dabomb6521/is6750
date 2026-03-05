import { TextField, Grid, Button, CircularProgress } from "@mui/material";
import { useState, useRef, use } from "react";
import ProfileContext from "../store/ProfileContext";

let counter = 0;
const Profile = () => {
  const {
    profileHistory: history,
    loading,
    error,
    deleteFunc,
    addFunc,
  } = use(ProfileContext);
  const fullNameRef = useRef();

  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    title: "",
    bio: "",
  });
  const [changed, setChanged] = useState({
    fullName: false,
    email: false,
    title: false,
    bio: false,
  });

  const isValidName =
    profile.fullName &&
    profile.fullName.trim().includes(" ") &&
    profile.fullName.split(" ").length >= 2;
  const isValidEmail = profile.email && profile.email.includes("@");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((old) => ({ ...old, [name]: value }));
    setChanged((old) => ({ ...old, [name]: true }));
  };

  console.log("Rendering for the " + ++counter + " time");
  return (
    <>
      <Grid container spacing={2}>
        <Grid size={12}>
          <h2>My Profile</h2>
        </Grid>
        <Grid size={12}>
          <TextField
            label="Full Name"
            fullWidth
            inputRef={fullNameRef}
            error={!isValidName && changed.fullName}
            helperText={
              !isValidName && changed.fullName
                ? "Please include your first and last names"
                : undefined
            }
            value={profile.fullName}
            name="fullName"
          />
        </Grid>
        <Grid size={6}>
          <TextField
            label="Email"
            fullWidth
            onChange={handleChange}
            error={!isValidEmail && changed.email}
            helperText={
              !isValidEmail && changed.email ? "Please include @" : undefined
            }
            name='email'
          />
        </Grid>
        <Grid size={6}>
          <TextField
            label="Current Title"
            fullWidth
            value={profile.title}
            onChange={handleChange}
            name="title"
          />
        </Grid>
        <Grid size={12}>
          <TextField
            label="Bio/Summary"
            multiline
            fullWidth
            value={profile.bio}
            onChange={handleChange}
            name="bio"
          />
        </Grid>
        <Grid container>
          <Button variant="contained" size="large" disabled={!isValidName || !isValidEmail}>
            Save
          </Button>
          <Button variant="outlined" size="large">
            Cancel
          </Button>
        </Grid>
        <Grid container size={12}>
          {loading && <CircularProgress />}
          {!loading &&
            history.map((item) => (
              <Grid size={4} key={item.id}>
                <h1>{item.fullName}</h1>
                <h4>
                  {item.title} - {item.email}
                </h4>
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
