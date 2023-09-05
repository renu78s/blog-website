import React, { useState, useEffect } from "react";
import News from "./News";
import axios from "axios";
import Categories from "./Categories";

const NewsContainer = () => {
  const [newsData, setNewsData] = useState([]);
  const [filteredValue, setfilteredValue] = useState("home");

  const categories = [
    "arts",
    "automobiles",
    " books/review",
    "business",
    "fashion",
    "food",
    "health",
    "home",
    "insider",
    "magazine",
    "movies",
    "politics",
    "science",
    "technology",
    "travel",
    "world",
    "sports",
  ];

  const NewsUrl = `https://api.nytimes.com/svc/topstories/v2/${filteredValue}.json?api-key=kfZOyEeMluvdmSyMj8H10hqr5ZRLHYq0`;

  useEffect(() => {
    axios
      .get(NewsUrl)
      .then((res) => {
        console.log(res.data);
        setNewsData(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [filteredValue]);

  console.log(filteredValue);

  return (
    <>
      {/* navigation card code from bootstrap cards - starts */}

      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            {categories.map((x) => {
              return (
                <>
                  <Categories title={x} stateChanger={setfilteredValue} />
                </>
              );
            })}
          </ul>
        </div>

        {newsData.map((x) => {
          let image;
          let caption;
          let factArr = [];
          let geoArr = [];
          if (x.multimedia !== null) {
            image = x.multimedia[0]?.url;
            caption = x.multimedia[0]?.caption;
          } else {
            caption = "no captions";
          }
          if (x.des_facet !== null) {
            x.des_facet.map((x) => {
              factArr = x;
            });
            x.geo_facet.map((x) => {
              return (geoArr = x);
            });
          }
          return (
            <>
              <News
                title={x.title}
                published_date={x.published_date}
                media={image}
                caption={caption}
                abstract={x.abstract}
                byline={x.byline}
                short_url={x.short_url}
                weburl={x.url}
                des_facet={factArr}
                geo_facet={geoArr}
              />
            </>
          );
        })}
      </div>
      {/* navigation card code from bootstrap cards - ends */}
    </>
  );
};

export default NewsContainer;
