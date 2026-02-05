import { createContext, useState } from "react";

const Router = ({children}) => {
    const [page,setPage] = useState("home");
  return (
    <RouterContext value={{page,setPage}}>
        {children}
    </RouterContext>
  )
}

export default Router

export const RouterContext = createContext({page:"home",setPage:()=>{}})