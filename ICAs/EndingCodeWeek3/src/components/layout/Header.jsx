const Header = () => {
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
              <a href="index.html" className="active">
                Jobs
              </a>
            </li>
            <li>
              <a href="applications.html">Applications</a>
            </li>
            <li>
              <a href="profile.html">Profile</a>
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
