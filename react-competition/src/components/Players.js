import React, {useEffect, useState} from 'react'
import GridViewIcon from '@mui/icons-material/GridView';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';
import { useSelector, useDispatch } from 'react-redux';
import classes from "./Players.module.scss"
import Player from "./Player"
import { Button, Checkbox, FormControlLabel } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import {Tooltip} from 'react-tooltip'

import { compActions } from '../store/comp-slice';


const Players = (props) => {

    const [agendaView, setAgendaView] = useState(false)
    const players = useSelector(state=> state.players.names)
    // const [winner, setWinner] = useState("")
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
      handleRandomAnimation();
    }


    const sleep = (ms) =>
    {
      return new Promise(resolve => setTimeout(resolve, ms))
    }

    const handleRandomAnimation = async () => 
    {
      
      let randomIndex;

      if(!isAnimating)
      {
        for(let i = 0; i<=10; i++)
        {
          console.log("yup")
                setIsAnimating(true);
          
                // Losowanie indeksu
                randomIndex = Math.floor(Math.random() * players.length);

                if(i===10)
                {
                  setAnimationIndex(randomIndex);
                  const winner  = players[randomIndex];
       
                  setTimeout(() => 
                  {
                    setIsAnimating(false);
                    setAnimationIndex(null);
                  }, 2000);
                  dispatch(compActions.getWinner(winner))
                  return
                }
                else
                {
                  setAnimationIndex(randomIndex);
          
                  // Po kilku sekundach zakończ animację i zresetuj stan
                  setTimeout(() => 
                  {
                    setIsAnimating(false);
                    setAnimationIndex(null);
                  }, 100);
                  await sleep(200)
                }
          
                // Ustawienie aktualnego indeksu w stanie
                
        }
        
      }
        
    };


    const resetCompetition = () =>
    {
      if(players.length > 0)
      {
        const confirm = window.confirm("Do you want to reset competition?")
        if(confirm) dispatch(compActions.resetState())
        
      }
    }

  return (
  <div className={classes.playersBox}>
        <div className={classes.playersOptions}>
        <div className={classes.leftOptions}>
            <Tooltip id="grid"/> 
            <GridViewIcon data-tooltip-id="grid" data-tooltip-content="Grid View" onClick={viewChange} sx={{color: agendaView ? "grey":"black",
            '&:hover':  {
                backgroundColor: 'transparent',
                color: 'black',
                cursor: 'pointer',
              }}}/>
             <Tooltip id="agenda"/>  
            <ViewAgendaIcon data-tooltip-id="agenda" data-tooltip-content="Agenda View" onClick={viewChange} sx={{color: agendaView ? "black":"grey",
            '&:hover':  {
                backgroundColor: 'transparent',
                color: 'black',
                cursor: 'pointer',
              }}}/>
              <Tooltip id="reset"/> 
              <RestartAltIcon data-tooltip-id="reset" data-tooltip-content="Reset players" sx={{color:"grey",
            '&:hover':  {
                backgroundColor: 'transparent',
                color: 'black',
                cursor: 'pointer',
              }}} onClick = {resetCompetition}/>
          </div>
              <FormControlLabel control={<Checkbox />} label="More winners"/>
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