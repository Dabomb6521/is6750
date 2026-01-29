const Header = ({updatePage}) => {
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
              <a href="#" className="active" onClick={()=>updatePage("home")}>
                Jobs
              </a>
            </li>
            <li>
              <a href="#" onClick={()=>updatePage("applications")}>Applications</a>
            </li>
            <li>
              <a href="#" onClick={()=>updatePage("profile")}>Profile</a>
            </li>
          </ul>
        </nav>
        <div className="user-profile">
          <span className="user-initials">JD</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
