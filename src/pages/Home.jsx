import React, { useState } from "react";
import Header from "../components/Header";
import NewsContainer from "../components/news/NewsContainer";
import UpdatesContainer from "../components/updates/UpdatesContainer";
import JobContainer from "../components/jobs/JobContainer";
import { GlobalData } from "../GlobalData";

const Home = () => {
  const [text, setText] = useState("");
  return (
    <GlobalData.Provider value={{ text, setText }}>
      <div className="container-fluid">
        <div className="row  d-flex justify-content-center">
          <div className="col-lg-11 col-md-11 col-sm-12">
            <div className="row">
              <div className="col ">
                <Header />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 col-md-8 col-sm-8">
                <NewsContainer />
              </div>

              <div className="col-4">
                <div className="row">
                  <div className="col">
                    <UpdatesContainer />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <JobContainer />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GlobalData.Provider>
  );
};

export default Home;
