import React from 'react'
import classes from './CreateList.module.css';
// import dropdown from '../assets/dropdown.png'

const CreateList = () => {
  const options = {
    privacy: ['Public', 'Private'],
    types: ['Travelling', 'Shopping', 'Gifts', 'Food', 'Books', 'Movies & TV Shows',
      'Home Decor', 'Gaming', 'Charity & Donations', 'Events & Tickets', 'Pets',
       'Outdoor Activities', 'Other'
    ],
  };
  return (
    <div className={classes.creationContent}>
    <div className={classes.creationWindow}>
      <div className={classes.creationHeader}>
        <h3>Create a list</h3>
      </div>

      <div className={classes.creationBody}>
        <div className={classes.authorInfo}>
          <div className={classes.creator}>
            <h4>Creator</h4>
            <p>Viktoriia Petrushyna</p>
          </div>

          <div className={classes.date}>
            <h4>Date</h4>
            <p>26/11/2024</p>
          </div>
        </div>

        <div className={classes.inputSection}>
          <div className={`${classes.createInput} ${classes.nameInput}`}>
            <input type="text" placeholder="Name"/>
          </div>
          <div className={classes.selectDiv}>
            <select className={classes.createType} name="privacy" id="choice">
              {options.privacy.map((choice) => (
                  <option key={choice} value={choice}>
                  {choice}
                  </option>
              ))}
            </select>
            <select className={classes.createType} name="types" id="type">
              {options.types.map((type) => (
                  <option key={type} value={type}>
                  {type}
                  </option>
              ))}
            </select>
          </div>
          <div className={`${classes.createInput} ${classes.descriptionInput}`}>
            <input type="text" placeholder="Description"/>
          </div>
          <div className={classes.createButton}>
            <button className={classes.button}>Create</button>
          </div>
          <div className={classes.cancelButton}>
            <button className={classes.button}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CreateList;