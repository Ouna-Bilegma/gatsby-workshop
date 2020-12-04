import React from "react"
import "./cards.styles.scss"

function Cards() {
  return (
    <div className="cards">
      <h3>Todo List</h3>
      <div>
        <p align="left" className="badges">
          <a href="https://tailwindcss.com/" target="_blank">
            <img
              alt="Badge Tailwindcss"
              src="https://img.shields.io/badge/TAILWIND-blue?style=flat&logo=tailwind-css"
            />
          </a>
          &nbsp;
          <a href="https://reactjs.org/" target="_blank">
            <img
              alt="Badge ReactJS"
              src="https://img.shields.io/badge/REACT-yellow?style=flat&logo=react"
            />
          </a>
          &nbsp;
          <a href="https://www.gatsbyjs.com/" target="_blank">
            <img
              alt="Badge Gatsby"
              src="https://img.shields.io/badge/GATSBY-purple?style=flat&logo=gatsby"
            />
          </a>
        </p>
        <p>This is my first minimalist Todo List. Check it out!</p>
        <button>Live</button>
        <button>Code</button>
      </div>
    </div>
  )
}

export default Cards
