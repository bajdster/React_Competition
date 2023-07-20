import React, {useState} from 'react'
import GridViewIcon from '@mui/icons-material/GridView';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';
import { useSelector } from 'react-redux';
import classes from "./Players.module.scss"
import Player from "./Player"
import { Button } from '@mui/material';
import Winner from "../assets/youwin.gif"


const Players = (props) => {

    const [agendaView, setAgendaView] = useState(false)
    const players = useSelector(state=> state.players.names)
    const [winner, setWinner] = useState("")

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

        setWinner(players[random])
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
        
        <h2>{winner}</h2>
        {winner !== '' && <div className={classes.winning}>
        
            <img src={Winner}></img>
        </div>}
    </div>
  )
}

export default Players