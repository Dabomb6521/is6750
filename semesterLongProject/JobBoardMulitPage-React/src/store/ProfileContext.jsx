import { createContext } from "react";

const ProfileContext = createContext(
    {
        profileHistory:[],
        setProfileHistory:()=>{},
})

export default ProfileContext;