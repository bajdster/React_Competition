import React from 'react'
import classes from "../components/Logo.module.scss"
import win from "../assets/win.png"
import gif from "../assets/gif1.gif";
import { useDispatch } from 'react-redux';
import { compActions } from '../store/comp-slice';
import pol from "../assets/pol.png"
import uk from "../assets/uk.png"

const Navigation = () => {

  const dispatch = useDispatch()

  const switchLang = (lang) =>
  {
    dispatch(compActions.selectLanguage(lang))
  }

  return (
    <div className={classes.logoBox}>
      <img src={win} alt="win logo"/>
      <div className={classes.lang}>
        <div onClick={()=>
        {
          switchLang('polish')
        }}>
        <img src={pol} alt="polish flag"></img>
        </div>
        <div onClick={()=>
        {
          switchLang('english')
        }}>
        <img src={uk} alt="british flag"></img>
        </div>
      </div>
    </div>
  )
}

export default Navigation