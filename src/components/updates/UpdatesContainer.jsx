import React from "react";
import Update from "./Update";

const UpdatesContainer = () => {
  return (
    <>
      <div className="card mb-3" style={{ width: "18rem " }}>
        <div className="card-header text-capitalize">
          upcoming events at - <h1>{name}</h1>
        </div>
        <ul className="list-group list-group-flush">
          <Update />
          <Update />
          <Update />
          <Update />
          <Update />
          <Update />
        </ul>
      </div>
      {/* list group code from bootstrap card - ends */}
    </>
  );
};

export default UpdatesContainer;
