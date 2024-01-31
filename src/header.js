function Header() {
  return (
    <header>
      <div className="header-container">
        <ul className="header-list">
          <li>
            <img
              src="../assets/fujifilm_corporate_logo.svg"
              className="FujiLogo"
              alt="Fujifilm Logo"
            ></img>
          </li>
          <li className="phil">Philippines</li>
          <li>|</li>
          <li>Consumer</li>
          <li>Healthcare</li>
          <li>Business</li>
          <li>About Us</li>
          <li>News</li>
          <li>
            <img
              src="../assets/search.png"
              className="SearchIcon"
              alt="Search Icon"
            ></img>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
