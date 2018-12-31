import React from "react"
import layout from "./images/layout.png"
import Gallery from "./Gallery"
import grid from "./images/project2.png"
import presentation from "./images/pres.png"

function Portfolio({ visibility }) {
    console.log(visibility)

    if (visibility) {
        return (
            <div className="section-wrapper">
                <div className="about-section">
                <p><strong>REACT DEVELOPER SITE</strong></p>
                    <div className="portfolio-project">
                        <a href="https://github.com/delamol1/portfolio">Please, feel free to check the source code</a>
                        <p> This website was designed with <strong>REACT</strong> to demonstrate my skills in this javascript framework.It demonstrates creating functional and class-based components, props handling, state and changing state, conditional rendering, handling events. I am planning to add here lifecycle methods, a form and and an example of fetching data from an API. </p>
                        <img alt="" src={presentation} />
                    </div>
                    <div className="portfolio-project">
                    <p><strong>LAYOUT EXAMPLE</strong></p>
                        <a href="https://github.com/delamol1/sprintgulp">Check the source code</a>
                        <p> This is an example of one of layouts I created from a psd.</p>
                        <img alt="" src={layout} />
                    </div>
                    <div className="portfolio-project">
                    <p><strong>CSS GRID</strong></p>
                    <a href="https://delamol1.github.io/projectweek2/dist/">Check the source grid layout</a>
                        <p>This is an example of a layout I created using grids a a little of flexboxes. It helped me to master CSS GRIDS</p>
                        <img alt="" src={grid} />
                    </div>
                </div>
            </div>

        )
    } else return null
}

export default Portfolio