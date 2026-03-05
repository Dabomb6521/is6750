import { createContext } from "react";

const ProfileContext = createContext(
    {
        profileHistory:[],
        loading:false,
        error:"",
        deleteFunc:()=>{},
        addFunc:(data)=>{}
})

export default ProfileContext;