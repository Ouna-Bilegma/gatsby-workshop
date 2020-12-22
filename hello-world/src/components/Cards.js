import React from "react"
import "./cards.styles.scss"

function Cards(Props) {
  return (
    <div className="cards">
      <h3>{Props.head}</h3>
      <div>
        <p align="left" className="badges">
          <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
            <img
              alt="Badge Tailwindcss"
              src="https://img.shields.io/badge/TAILWIND-blue?style=flat&logo=tailwind-css"
            />
          </a>
          &nbsp;
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            <img
              alt="Badge ReactJS"
              src="https://img.shields.io/badge/REACT-yellow?style=flat&logo=react"
            />
          </a>
          &nbsp;
          <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">
            <img
              alt="Badge Gatsby"
              src="https://img.shields.io/badge/GATSBY-purple?style=flat&logo=gatsby"
            />
          </a>
        </p>
        <p>Hello there</p>
        <button>
          <strong>Live</strong>
        </button>
        <button>
          <strong>Code</strong>
        </button>
      </div>
    </div>
  )
}

export default Cards
