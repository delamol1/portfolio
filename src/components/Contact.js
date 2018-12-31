import React from "react"


function Contact({ visibility }) {
    console.log(visibility)

    if (visibility) {
        return (
            <div className="section-wrapper">
                <div className="about-section">
                    <div>
                        <p style={{ display: "inline-block" }}>City :</p> <p style={{ fontWeight: 600, display: "inline-block" }}>Kiev</p>
                    </div>
                    <div>
                        <p style={{ display: "inline-block" }}>Phone :</p> <p style={{ fontWeight: 600, display: "inline-block" }}>+380 63 942 88 25</p>
                    </div>
                    <div>
                        <p style={{ display: "inline-block" }}>Email :</p> <p style={{ fontWeight: 600, display: "inline-block" }}><a href="mailto:oleksandrhubenko@gmail.com">oleksandrhubenko@gmail.com</a></p>
                    </div>
                    <a target="_blank" href="https://www.linkedin.com/in/aleksandr-hubenko-5b2557b7/"><i className="fab fa-linkedin"></i> - Contact me on LinkedIn</a>
                </div>
            </div>
        )
    } else return null
}

export default Contact