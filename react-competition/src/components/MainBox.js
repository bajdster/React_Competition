import React, {useState, useRef} from 'react'
import classes from "../components/MainBox.module.scss"

import { FormControl, TextField, Button } from '@mui/material'

const MainBox = () => {

    const [name, setName] = useState("Antek")
    const nameRef = useRef()

    const addName = ()=>
    {
        setName(nameRef.current.value)
    }

  return (
    <main>
        <h1>Type winner's</h1>
        <h1><span>NAME</span></h1>

        <div className={classes.competitionForm}>
        <form>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" inputRef={nameRef}/>
            <Button onClick={addName} variant="contained">Add Name</Button>
        </form>
        </div>
        <div>{name}</div>
    </main>
  )
}

export default MainBox