import React, {useEffect, useState} from 'react'
import GridViewIcon from '@mui/icons-material/GridView';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';
import { useSelector, useDispatch } from 'react-redux';
import classes from "./Players.module.scss"
import Player from "./Player"
import { Button } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

import { compActions } from '../store/comp-slice';


const Players = (props) => {

    const [agendaView, setAgendaView] = useState(false)
    const players = useSelector(state=> state.players.names)
    const [winner, setWinner] = useState("")
    const dispatch = useDispatch()

    const viewChange = () =>
    {
        setAgendaView((prev)=>
        {
            return !prev;
        })
    }

    const winnerSearch = () =>
    {
        const playersAmount = players.length;
        const random = Math.floor(Math.random() * playersAmount)
        const winner  = players[random]
        setWinner(winner);

        dispatch(compActions.getWinner(winner))
    }

    // useEffect(()=>
    // {
    //   if(winner === '')
    //   {
    //     return
    //   }
      

    // }, [winner])

    const resetCompetition = () =>
    {
      const confirm = window.confirm("Do you want to reset competition?")
      if(confirm) dispatch(compActions.resetState())
    }

  return (
  <div className={classes.playersBox}>
        <div className={classes.playersOptions}>
            <GridViewIcon onClick={viewChange} sx={{color: agendaView ? "grey":"black",
            '&:hover':  {
                backgroundColor: 'transparent',
                color: 'black',
                cursor: 'pointer',
              }}}/>
            <ViewAgendaIcon onClick={viewChange} sx={{color: agendaView ? "black":"grey",
            '&:hover':  {
                backgroundColor: 'transparent',
                color: 'black',
                cursor: 'pointer',
              }}}/>
              <RestartAltIcon sx={{color:"grey",
            '&:hover':  {
                backgroundColor: 'transparent',
                color: 'black',
                cursor: 'pointer',
              }}} onClick = {resetCompetition}/>
        </div>
      <div className={classes.players}>
        {players.length> 0 ? props.names.map((name, index)=>
        {
          return <Player key={index} index={index} name ={name} agenda={agendaView}/> 
        }): <p>There is no added players</p>}
        </div>

        <div className={classes.actionButton}>
            {players.length> 0 &&<Button variant='text' sx={{ fontSize:"50px", color: 'rgb(13, 146, 173)', fontWeight:"bold", textShadow:"1px 1px 5px black"}} onClick={winnerSearch}>Let's find out!</Button>}
        </div>
        
    </div>
  )
}

export default Players