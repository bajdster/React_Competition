import React from 'react'
import classes from "../components/Logo.module.scss"
import win from "../assets/win.png"
import gif from "../assets/gif1.gif"

const Navigation = () => {
  return (
    <div className={classes.logoBox}>
      <img src={win} alt="win logo"/>
    </div>
  )
}

export default Navigation