import React, { useState } from 'react';
import SingleNewsDetail from './SingleNewsDetail';
const News = ({
  title,
  published_date,
  media = 'null',
  caption = 'null',
  abstract,
  byline,
  des_facet,
  geo_facet,
  short_url,
  weburl,
}) => {
  const [openDetail, setOpenDetail] = useState(false);
  const style = {
    marginBlock: '10px',
    minWidth: '200px',
  };
  return (
    <>
      {openDetail ? (
        <SingleNewsDetail
          title={title}
          published_date={published_date}
          media={media}
          caption={caption}
          abstract={abstract}
          byline={byline}
          des_facet={des_facet}
          geo_facet={geo_facet}
          short_url={short_url}
          weburl={weburl}
          setOpenDetail={setOpenDetail}
        />
      ) : (
        ' '
      )}
      <button
        className="btn btn-primary d-flex justify-content-center align-items-center "
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
        onClick={() => setOpenDetail(true)}
        title="double click to see full news"
        style={style}
      >
        {/* horizontal card code from bootstrap start */}
        <div className="card mb-3" style={{ minWidth: '200px' }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={media} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{caption}</p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    {published_date}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* horizontal card code from bootstrap ends */}
      </button>
    </>
  );
};

export default News;
