import { TextField, Grid, Button, CircularProgress } from "@mui/material";
import { useRef, use } from "react";
import ProfileContext from "../store/ProfileContext";
import { useState } from "react";
import {getErrorName, getErrorEmail} from '../utils/validate.js'
import { useInput } from "../hooks/useInput.js";

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

  const [fullName, fullNameChanged, fullNameErrors, handleFullNameChange, resetFullName] = useInput('', getErrorName);
  const[email, emailChanged, emailErrors, handleEmailChange, resetEmail] = useInput('', getErrorEmail);
  const [title,,,handleTitleChange, resetTitle] = useInput('');
  const [bio,,,handleBioChange,resetBio] = useInput('');

  const [showBio, setShowBio] = useState(true);

  const toggleBio = () => {
    setShowBio((val)=>!val)
  }

  const handleFormSumbit = (e) => {
    e.preventDefault();
    if (fullNameErrors || emailErrors) return
    addFunc({fullName, email, title, bio})
    resetBio();
    resetTitle();
    resetFullName();
    resetEmail();
    console.log("Submitted!")
  }

  console.log("Rendering for the " + ++counter + " time");
  return (
    <form onSubmit={handleFormSumbit}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <h2>My Profile</h2>
        </Grid>
        <Grid size={12}>
          <TextField
            label="Full Name"
            error={fullNameErrors && fullNameChanged}
            helperText={
              fullNameErrors && fullNameChanged
                ? "Please include your first AND last names"
                : undefined
            }
            fullWidth
            value={fullName}
            name="fullName"
            inputRef={fullNameRef}
            onChange={handleFullNameChange}
          />
        </Grid>
        <Grid size={6}>
          <TextField
            label="Email"
            error={emailErrors && emailChanged}
            helperText={
              emailErrors && emailChanged ? "Please include @" : undefined
            }
            fullWidth
            value={email}
            name="email"
            onChange={handleEmailChange}
          />
        </Grid>
        <Grid size={6}>
          <TextField
            label="Current Title"
            fullWidth
            value={title}
            onChange={handleTitleChange}
            name="title"
          />
        </Grid>
        <Grid size={12}>
          <Button onClick={toggleBio}>Hide/Show Bio</Button>
          
          <Activity mode={showBio?"visible": "hidden"}>
          <TextField
            label="Bio/Summary"
            multiline
            fullWidth
            name="bio"
          />
          </Activity>
        </Grid>
        <Grid container>
          <Button type="submit" variant="contained" size="large" disabled={emailErrors||fullNameErrors}>
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
    </form>
  );
};

export default Profile;
