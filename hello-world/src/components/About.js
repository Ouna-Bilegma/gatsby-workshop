import React, { Component } from "react"
import "./about.styles.scss"

class About extends Component {
  render() {
    return (
      <div className="about">
        <img className="reindeer" src="./img/reindeer.svg" alt="reindeer"></img>
        <h2>ABOUT </h2>
        <div>
          <img
            className="profile"
            src="./img/.jpg"
            alt="profilephoto"
          ></img>
          <div className="bio">
            <h3 className="header3">Hello there, I'm Oyuna</h3>
            <p className="aboutme">
              I am currently looking for my next challenge as a{" "}
              <span className="frontend">Front-End Developer</span>, having
              expertise in both Web Development and UI/UX design. After moving
              to Belgium I decided to return to my passion about design &
              advertising and further build upon my university studies in
              Communication Arts.
            </p>

            <p className="aboutme">
              After an internship as{" "}
              <span className="uidesigner">UI/UX designer</span> at an ambitious
              start-up company within{" "}
              <a
                href="https://thefactory.works/"
                target="_blank"
                rel="noreferrer"
              >
                EY
              </a>
              , I am currently at the end of an intensive 7 month Education in
              Web Development{" "}
              <a href="https://becode.org/" target="_blank" rel="noreferrer">
                @BeCode
              </a>
              .
            </p>
            <p className="aboutme">
             Hello
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default About
