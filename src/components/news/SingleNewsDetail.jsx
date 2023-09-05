import React from "react";

const SingleNewsDetail = ({
  title,
  abstract,
  byline,
  published_date,
  caption,
  des_facet,
  geo_facet,
  short_url,
  media,
  setOpenDetail,
}) => {
  return (
    <div>
      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabindex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
        style={{ width: "100vw" }}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
            {title}
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={() => setOpenDetail(false)}
          ></button>
        </div>
        <div className="offcanvas-body">
          {/* kitchen sink card from bootstrap start */}
          <div className="card" style={{ width: "90vw" }}>
            <img className="card-img-top" src={media} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{abstract}</h5>
              <p>{byline}</p>
              <p>on {published_date}</p>
              <p className="card-text">{caption}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{des_facet}</li>
              <li className="list-group-item"> {geo_facet}</li>
              {/* <li className="list-group-item">Vestibulum at eros</li> */}
            </ul>
            <div className="card-body">
              <a href={short_url} className="card-link">
                original news link
              </a>
              {/* <a href={weburl} className="card-link">
                original html link
              </a> */}
            </div>
          </div>

          {/* kitchen sink card from bootstrap  ends*/}
        </div>
      </div>
    </div>
  );
};

export default SingleNewsDetail;
