import { use } from "react";
import ProfileContext from "../../store/ProfileContext";
import { RouterContext } from "../../store/RouterContext";

const Header = () => {

  const {profileHistory} = use(ProfileContext);
  const {page,setPage:updatePage} = use(RouterContext)

  const getInitials = ()=>{
    if(profileHistory.length<=0) return "N/A";
    const lastEntry  = profileHistory.length-1;
    const {fullName} =  profileHistory[lastEntry];
    if(!fullName.includes(" ")) return fullName.substring(0,1);
    return fullName.split(" ")[0].substring(0,1) + fullName.split(" ")[1].substring(0,1);

  }

  const initials = getInitials();
  return (
    <header className="main-header">
      <div className="container header-content">
        <div className="logo">
          <h1>
            Job<span className="highlight">Finder</span>
          </h1>
        </div>
        <nav className="main-nav">
          <ul>
            <li>
              <a href="#" className={page==="home"?"active":undefined} onClick={()=>updatePage("home")}>
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className={page==="applications"?"active":undefined} onClick={()=>updatePage("applications")}>Applications</a>
            </li>
            <li>
              <a href="#" className={page==="profile"?"active":undefined} onClick={()=>updatePage("profile")}>Profile</a>
            </li>
          </ul>
        </nav>
        <div className="user-profile">
          <span className="user-initials">{getInitials()}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
