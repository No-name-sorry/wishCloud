import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import classes from '../Components/List.module.css'
import cancel from '../assets/cancel.png'
import time from '../assets/time.png'
// import done from '../assets/done.png'

export const List = () => {
  const options = {
    privacy: ['Public', 'Private'],
  };

  const [selectedPrivacy, setSelectedPrivacy] = useState('Public');

  const handlePrivacyChange = (e) => {
    setSelectedPrivacy(e.target.value);
  };

  return (
      <div className={classes.list}>
      <NavLink to='/openlist'><p className={classes.listTitle}>Summer Trip</p></NavLink>
        <div className={classes.progress}>
            <img src={time} alt='img'/>
            <p>In Progress</p>
        </div>
        <div className='category'>
            <p>Travelling</p>
        </div>
        <div className={classes.security}>
          <select
            value={selectedPrivacy}
            onChange={handlePrivacyChange}
            className={classes.selectPrivacy}
          >
            {options.privacy.map((privacy) => (
              <option key={privacy} value={privacy}>
                {privacy}
              </option>
            ))}
          </select>
        </div>
        <img className={classes.cancelButton} src={cancel} alt='cancel'/>
      </div>
  )
}

export const ListAdd = () => {
  return (
    <NavLink to='/create'><div className={`${classes.list} ${classes.add}`}>
        <div class={classes.plusIcon}>
          <div class={classes.vertical}></div>
          <div class={classes.horizontal}></div>
        </div>
    </div>
    </NavLink>
  )
}
