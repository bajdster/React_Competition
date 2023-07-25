import React, {useEffect, useState} from 'react'
import GridViewIcon from '@mui/icons-material/GridView';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';
import { useSelector, useDispatch } from 'react-redux';
import classes from "./Players.module.scss"
import Player from "./Player"
import { Button} from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import {Tooltip} from 'react-tooltip'

import { compActions } from '../store/comp-slice';


const Players = (props) => {

    const [agendaView, setAgendaView] = useState(false)
    const players = useSelector(state=> state.players.names)
    const lang = useSelector(state=>state.players.lang)
    // const [winner, setWinner] = useState("")
    const dispatch = useDispatch()
    const [animationIndex, setAnimationIndex] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isChecked, setIsChecked] = useState(false)

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
      let timer;

      if(!isAnimating)
      {
        for(let i = 0; i<=10; i++)
        {
                setIsAnimating(true);
          
                // Losowanie indeksu
                randomIndex = Math.floor(Math.random() * players.length);

                if(i===10)
                {
                  setAnimationIndex(randomIndex);
                  const winner  = players[randomIndex];
       
                  timer = setTimeout(() => 
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
                  const timer = setTimeout(() => 
                  {
                    setIsAnimating(false);
                    setAnimationIndex(null);
                  }, 100);
                  await sleep(200)
                }
          
                // Ustawienie aktualnego indeksu w stanie
                
        }
        
      }
        
      clearTimeout(timer)
    };

    const resetCompetition = () =>
    {
      if(players.length > 0)
      {
        const confirm = window.confirm(lang === 'english' ? "Do you want to reset competition?": 'Czy na pewno chcesz zresetować stan?')
        if(confirm) dispatch(compActions.resetState())
        
      }
    }

    const checkboxHandle = () =>
    {
      setIsChecked((prev)=>
      {
        return !prev;
      })
    }

  return (
  <div className={classes.playersBox}>
        <div className={classes.playersOptions}>

            <Tooltip id="grid"/> 
            <GridViewIcon data-tooltip-id="grid" data-tooltip-content={lang === 'english'? 'Grid View' : 'Widok siatki'} onClick={viewChange} sx={{color: agendaView ? "grey":"black",
            '&:hover':  {
                backgroundColor: 'transparent',
                color: 'black',
                cursor: 'pointer',
              }}}/>
             <Tooltip id="agenda"/>  
            <ViewAgendaIcon data-tooltip-id="agenda" data-tooltip-content={lang === 'english'? 'Agenda View' : 'Widok listy'} onClick={viewChange} sx={{color: agendaView ? "black":"grey",
            '&:hover':  {
                backgroundColor: 'transparent',
                color: 'black',
                cursor: 'pointer',
              }}}/>
              <Tooltip id="reset"/> 
              <RestartAltIcon data-tooltip-id="reset" data-tooltip-content={lang === 'english'? 'Reset players' : 'Resetuj stan'} sx={{color:"grey",
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
        }): <p>{lang === 'english'? 'There is no added players' : 'Brak dodanych uczestników'}</p>}
        </div>

        <div className={classes.actionButton}>
            {players.length> 0 &&<Button variant='text' sx={{ fontSize:"40px", color: 'rgb(13, 146, 173)', fontWeight:"bold", textShadow:"1px 1px 5px black"}} onClick={winnerSearch}>{lang === 'english'? "Let's find out" : 'Losuj zwycięzcę'}</Button>}
        </div>
        
    </div>
  )
}

export default Players