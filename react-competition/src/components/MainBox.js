import React, {useState, useRef} from 'react'
import classes from "../components/MainBox.module.scss"
import People from "../assets/people.jpg"
import Players from './Players'
import {useDispatch, useSelector} from "react-redux";
import { compActions } from '../store/comp-slice';
import Winner from "../assets/youwin.gif"

import { TextField, Button, Stack} from '@mui/material'


const MainBox = () => {

  const players = useSelector(state=>state.players.names)
  const winner = useSelector(state=>state.players.winner)
  const lang = useSelector(state=>state.players.lang)
  const dispatch = useDispatch()

    const nameRef = useRef()

    const addName = (e)=>
    {
        e.preventDefault();
        if(nameRef.current.value)
        {
          dispatch(compActions.addPlayer(nameRef.current.value))
          nameRef.current.value = ""
        }
      
    }

  return (
    <main>
        
        <div className={classes.competitionForm}>

          {winner === '' ? <h1>{lang === 'english' ? "Type winner's": 'Wpisz swojego'}</h1> : <h1>{lang === 'english' ? "The winner is": 'Wygrywa'}</h1>}
          {winner === '' ? <h1><span>{lang === 'english'? 'NAME' : 'UCZESTNIKA'}</span></h1>: <h1><span>{winner}</span></h1>}

          <div className={classes.peopleImage}>
            {winner === "" ? <img src={People} alt="people"></img>:
          
        
            <img src={Winner} alt="winner gif"></img>}
          </div>

          <form onSubmit={addName}>
              <TextField id="outlined-basic" label={lang === 'english' ? 'Name': 'Imię'} variant="outlined" inputRef={nameRef}/>
              <Button type= "submit" variant="contained" >{lang === 'english'? 'Add name' : 'Dodaj imię'}</Button>
          </form>
        </div>

        <Players names={players}/>
      
      
        
    </main>
  )
}

export default MainBox

//add polish version