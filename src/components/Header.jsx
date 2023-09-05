import React from "react";
import "../style/main.css";
const Header = () => {
  return (
    <>
      <h1 className="heading">blog website</h1>
      <h2 className="sub_heading">top news here ...</h2>
      {/* breadcrumb from bootstrap start */}

      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">27K followers</li>
          <li className="breadcrumb-item">1 article per week</li>
          <li className="breadcrumb-item ">#reading #culture #news</li>
        </ol>
      </nav>
      {/* breadcrumb from bootstrap ends */}
    </>
  );
};

export default Header;
