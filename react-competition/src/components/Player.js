import React from 'react';
import classes from "./Player.module.scss";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const Player = ({name, index, onClick}) => {
  return (
    <>
    <div className={classes.player}>{name}
    <RemoveCircleIcon sx={{position: "absolute", color:"red", right:"-20px", fontSize:"40px"}} onClick={onClick}/></div>
    </>
  )
}

export default Player