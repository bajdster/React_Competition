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
    const [animationIndex, setAnimationIndex] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);

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
        const winner  = players[random];
        setWinner(winner);
        handleRandomAnimation();
        dispatch(compActions.getWinner(winner))
    }

    // useEffect(()=>
    // {
    //   if(winner === '')
    //   {
    //     return
    //   }
      
    //   if (!isAnimating) {
    //     setIsAnimating(true);
  
    //     // Losowanie indeksu
    //     const randomIndex = Math.floor(Math.random() * players.length);
  
    //     // Ustawienie aktualnego indeksu w stanie
    //     setAnimationIndex(randomIndex);
  
    //     // Po kilku sekundach zakończ animację i zresetuj stan
    //     setTimeout(() => {
    //       setIsAnimating(false);
    //       setAnimationIndex(null);
    //     }, 2000); // Długość animacji w milisekundach (tu: 2000 ms)
    //   }

    // }, [winner])

    //doesnt work
    const handleRandomAnimation = async () => 
    {
      const sleep = (ms) =>
      {
        return new Promise(resolve => setTimeout(resolve, ms))
      }

      players.forEach(player=>
        {
          if (!isAnimating) 
          {
            console.log("yup")
            setIsAnimating(true);
      
            // Losowanie indeksu
            const randomIndex = Math.floor(Math.random() * players.length);
      
            // Ustawienie aktualnego indeksu w stanie
            setAnimationIndex(randomIndex);
      
            // Po kilku sekundach zakończ animację i zresetuj stan
            setTimeout(() => {
              setIsAnimating(false);
              setAnimationIndex(null);
            }, 500); // Długość animacji w milisekundach (tu: 2000 ms)
            
          }
          
        })
        
    };


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
          const playerClass = index === animationIndex && isAnimating ? 'animated' : '';
          return <Player key={index} index={index} name ={name} agenda={agendaView} animated={playerClass}/> 
        }): <p>There is no added players</p>}
        </div>

        <div className={classes.actionButton}>
            {players.length> 0 &&<Button variant='text' sx={{ fontSize:"50px", color: 'rgb(13, 146, 173)', fontWeight:"bold", textShadow:"1px 1px 5px black"}} onClick={winnerSearch}>Let's find out!</Button>}
        </div>
        
    </div>
  )
}

export default Players