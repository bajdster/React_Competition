import React, {useState} from 'react'
import GridViewIcon from '@mui/icons-material/GridView';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';
import { useSelector } from 'react-redux';
import classes from "./Players.module.scss"
import Player from "./Player"


const Players = (props) => {

    const [agendaView, setAgendaView] = useState(false)
    const players = useSelector(state=> state.players.names)

    const viewChange = () =>
    {
        setAgendaView((prev)=>
        {
            return !prev;
        })
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
    </div>
  )
}

export default Players