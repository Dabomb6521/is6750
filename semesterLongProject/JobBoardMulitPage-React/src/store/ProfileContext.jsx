import { createContext } from "react";

const ProfileContext = createContext(
    {
        profileHistory:[],
        loading:false,
        error:"",
        deleteFunc:(id)=>{},
        addFunc:(data)=>{}
})

export default ProfileContext;