import { createContext } from "react";

const ProfileContext = createContext({
  profileHistory: [],
  setProfilehistory: () => {},
});

export default ProfileContext;