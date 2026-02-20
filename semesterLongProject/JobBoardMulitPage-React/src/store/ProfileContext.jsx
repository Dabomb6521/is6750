import { createContext } from "react";

const ProfileContext = createContext(
    {
        profileHistory:[],
        loading: false,
        error: "",
        deleteFunc: () => {},
})

export default ProfileContext;