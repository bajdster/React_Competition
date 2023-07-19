import React, {useState} from 'react';
import classes from "./Player.module.scss";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import EditIcon from '@mui/icons-material/Edit';

const Player = ({name, index, onClick, agenda}) => {

  const [optionsVisible, setOptionVisible] = useState(false)

  const switchOptionsVisible = () =>
  {
    setOptionVisible((prev)=>
    {
      return !prev;
    })
  }

  const agendaEditStyles = {position: "absolute", color:"white", left:"5px", fontSize:"40px"}
  const agendaDeleteStyles = {position: "absolute", color:"red", right:"0px", fontSize:"40px"}
  const gridEditStyles = {position: "absolute", color: "white", top:'-4px', left:"5px", fontSize:"20px"}
  const gridDeleteStyles = {position: "absolute", color: "red", top:'-4px', right:"0px", fontSize:"20px"}

  console.log(agenda)
  return (
    <>
    
    <div className={`${agenda ? classes.agenda : classes.player}`} onDoubleClick={switchOptionsVisible}>{name}
    {optionsVisible && <RemoveCircleIcon sx={agenda ? agendaDeleteStyles: gridDeleteStyles} onClick={onClick}/>}
    {optionsVisible && <EditIcon sx={agenda ? agendaEditStyles: gridEditStyles}/>}
    </div>
    </>
  )
}

export default Player