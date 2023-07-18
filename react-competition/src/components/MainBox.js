import React, {useState, useRef} from 'react'
import classes from "../components/MainBox.module.scss"
import People from "../assets/people.jpg"
import Players from './Players'

import { TextField, Button, Stack} from '@mui/material'


const MainBox = () => {

    const [names, setNames] = useState([])
    const nameRef = useRef()

    const addName = (e)=>
    {
        e.preventDefault();
        setNames((prev)=>
        {
          return [...prev, nameRef.current.value]
        })
        nameRef.current.value = ""
    }

  return (
    <main>
        
        <div className={classes.competitionForm}>

          <h1>Type winner's</h1>
          <h1><span>NAME</span></h1>

          <div className={classes.peopleImage}><img src={People}></img></div>

          <form onSubmit={addName}>
              <TextField id="outlined-basic" label="Name" variant="outlined" inputRef={nameRef}/>
              <Button type= "submit" variant="contained" >Add Name</Button>
          </form>
        </div>

        <Players names={names}/>
      
      
        
    </main>
  )
}

export default MainBox