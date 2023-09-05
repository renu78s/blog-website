import React from "react";

const Categories = ({ title, stateChanger }) => {
  const style = {
    marginLeft: "10px",
    marginBottom: "10px",
  };
  return (
    <>
      <li
        className="nav-item"
        style={style}
        onClick={() => stateChanger(title)}
      >
        <a className="nav-link active " aria-current="true" href="#">
          {title}
        </a>
      </li>
    </>
  );
};

export default Categories;
