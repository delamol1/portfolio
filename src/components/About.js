import React from "react"
import react from "./images/react.png"
import js from "./images/js.png"
import html from "./images/html.png"
import css from "./images/css.png"
import sass from "./images/sass.png"
import webpack from "./images/webpack.png"
import npm from "./images/npm.png"
import gulp from "./images/gulp.png"
import cssgrid from "./images/cssgrid.png"
import git from "./images/git.png"
import mate from "./images/mate.png"
import lille from "./images/lille.png"
import knlu from "./images/knlu.png"
import chart from "./images/chart.png"


function About({ visibility }) {
    console.log(visibility)

    if (visibility) {


        return (
            <div className="section-wrapper">
                <div className="about-section">

                    <p style={{ fontWeight: 600 }}>ABOUT ME:</p>
                    <p>
                        I am a result oriented person with strong theoretical background
                        and good practical experience in Front End. I obtained strong knowledge
                    in <strong>Javacript(REACT)</strong> and HTML and CSS(Grids, BEM, SASS and best practices)
                        and great programming skills in javascript.
                        I have extensive knowledge of javascript development, skilled in creating various
                        types of my own plugins, solving algorithms,
                    familiar with developer’s tools like <strong>GIT, npm, GULP, WebPack,</strong> best practices and techniques.
                        I have excellent knowledge of two foreign languages at C2 level: English and French.
                </p>
                </div>
                <div className="about-section">

                    <p style={{ fontWeight: 600 }}>TECHNOLOGIES:</p>

                    <div className="technologies">
                        <div>
                            <img alt="" src={react} />
                            <img alt="" src={js} />
                            <img alt="" src={html} />
                            <img alt="" src={css} />
                            <img alt="" src={cssgrid} />
                        </div>
                        <div>
                            <img alt="" src={sass} />
                            <img alt="" src={webpack} />
                            <img alt="" src={npm} />
                            <img alt="" src={gulp} />
                            <img alt="" src={git} />
                        </div>
                    </div>

                    <div className="about-languages">
                        <p style={{ fontWeight: 600 }}>LANGUAGES:</p>
                            
                            <img alt="" src={chart}/>
                            <div>
                            <p>English : C2</p> 
                            <p>French :C2</p> 
                            <p>Polish : B1</p> 
                            </div>
                        
                    </div>

                        <div className="about-education">

                        <div style={{ fontWeight: 600 }}>EDUCATION:</div>
                        
                        
                        <div>
                        <img alt="" src={mate}/>
                        <p>Full Stack Web Developer <br/>September 2018-Februaary 2019</p>
                        </div>

                        <div>
                        <img alt="" src={lille} /> 
                        <p>Master's degree in <br/> International Business 2014-2016</p>
                        </div>

                        <div>
                        <img alt="" src={knlu} />
                        <p>Bachelor's degree 2010-2014 in <br /> English and French</p>
                        </div>




                        </div>

                </div>
            </div>


        )
    } else {
        return null
    }
}

export default About