import React from "react";
import layout from "./images/layout.png";

import grid from "./images/project2.png";
import presentation from "./images/pres.png";
import cointegriti1 from "./images/cointegriti1.png";
import cointegriti2 from "./images/cointegriti2.png";

function Portfolio({ visibility }) {
  console.log(visibility);

  if (visibility) {
    return (
      <div className="section-wrapper">
        <div className="about-section">
          <p>
            <strong>Cryptocurrency Exchange Platfom</strong>
          </p>
          <div className="portfolio-project">
            {/* <a href="https://github.com/delamol1/BlogSaga"> */}
            Unfortunately, I can't disclose the source code but I can share code
            snippets if requested. My work consisted in creating all business
            logic including React Components, routing, saving data in Redux with
            Saga middleware, api requests etc
            {/* </a> */}
            <p>
              {" "}
              This test assigment was designed with{" "}
              <strong>
                REACT and Redux/Saga with api requests stored in Redux
              </strong>{" "}
              to demonstrate my skills.{" "}
            </p>
            <img alt="" src={cointegriti1} />
          </div>

          <p>
            <strong>Redux Saga</strong>
          </p>

          <div className="portfolio-project">
            <a href="https://github.com/delamol1/BlogSaga">
              Please, feel free to check the source code
            </a>
            <p>
              {" "}
              This test assigment was designed with{" "}
              <strong>
                REACT and Redux/Saga with api requests stored in Redux
              </strong>{" "}
              to demonstrate my skills.{" "}
            </p>
            <img alt="" src="" />
          </div>

          <p>
            <strong>REACT DEVELOPER SITE</strong>
          </p>
          <div className="portfolio-project">
            <a href="https://github.com/delamol1/portfolio/tree/master">
              Please, feel free to check the source code
            </a>
            <p>
              {" "}
              This website was designed with <strong>REACT</strong> to
              demonstrate my skills in this javascript framework.It demonstrates
              creating functional and class-based components, props handling,
              state and changing state, conditional rendering, handling events.
              I am planning to add here lifecycle methods, a form and and an
              example of fetching data from an API.{" "}
            </p>
            <img alt="" src={presentation} />
          </div>
          <div className="portfolio-project">
            <p>
              <strong>LAYOUT EXAMPLE</strong>
            </p>
            <a href="https://github.com/delamol1/sprintgulp">
              Check the source code
            </a>
            <p> This is an example of one of layouts I created from a psd.</p>
            <img alt="" src={layout} />
          </div>
          <div className="portfolio-project">
            <p>
              <strong>CSS GRID</strong>
            </p>
            <a href="https://delamol1.github.io/projectweek2/dist/">
              Check the source grid layout
            </a>
            <p>
              This is an example of a layout I created using grids a a little of
              flexboxes. It helped me to master CSS GRIDS
            </p>
            <img alt="" src={grid} />
          </div>
        </div>
      </div>
    );
  } else return null;
}

export default Portfolio;
