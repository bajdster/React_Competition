import React from 'react'
import Item from '@mui/material/Stack';

import classes from "./Players.module.scss"
import Player from "./Player"


const Players = (props) => {


    const handleClick = () =>
    {
        console.log("Yeah")
    }

  return (

      <div className={classes.players}>
        {props.names.map((name, index)=>
        {
          return <Player key={index} index={index} name ={name} onClick={handleClick} /> 
        })}
        </div>
  )
}

export default Players