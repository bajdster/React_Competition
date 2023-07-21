import React, {useState, useRef} from 'react';
import classes from "./Player.module.scss";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { compActions } from '../store/comp-slice';
import { TextField, Button, Stack} from '@mui/material'

const Player = ({name, index, agenda, animated}) => {

  const [optionsVisible, setOptionVisible] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const editNameRef = useRef()
  const dispatch = useDispatch();

  const switchOptionsVisible = () =>
  {
    if(!editMode)
    {
      setOptionVisible((prev)=>
      {
        return !prev;
      })
    }

  }

  const removeItem = () =>
  {
    setOptionVisible((prev)=>
    {
      return !prev;
    })
    dispatch(compActions.deletePlayer(index))
  }

  const editItem = () =>
  {
    setOptionVisible((prev)=>
    {
      return !prev;
    })
    setEditMode((prev)=>
    {
      return !prev;
    })
  }

  const setEditName = (e) =>
  {
    e.preventDefault();
    setEditMode(false)
    dispatch(compActions.editPlayer({index: index, editName: editNameRef.current.value}))
  }

  const agendaEditStyles = {position: "absolute", color:"white", left:"5px", fontSize:"40px"}
  const agendaDeleteStyles = {position: "absolute", color:"red", right:"0px", fontSize:"40px"}
  const gridEditStyles = {position: "absolute", color: "white", top:'-4px', left:"5px", fontSize:"20px"}
  const gridDeleteStyles = {position: "absolute", color: "red", top:'-4px', right:"0px", fontSize:"20px"}

  return (
    <>
    <div className={`${agenda ? classes.agenda : classes.player} ${animated ? classes.animated : ''}`} onDoubleClick={switchOptionsVisible}>
    {editMode ? 
          <form className = {classes.editForm} onSubmit={setEditName}>
              <TextField id="outlined-basic" label="" variant="outlined" 
              size='small'
              inputRef={editNameRef}
              defaultValue={name}
              />
              <Button type= "submit" variant="contained" >Edit</Button>
          </form> : name}
    {optionsVisible && <RemoveCircleIcon sx={agenda ? agendaDeleteStyles: gridDeleteStyles} onClick= {removeItem}/>}
    {optionsVisible && <EditIcon sx={agenda ? agendaEditStyles: gridEditStyles} onClick = {editItem}/>}
    </div>
    </>
  )
}

export default Player