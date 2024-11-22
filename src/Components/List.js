import React from 'react'
import '../Components/List.css'
import cancel from '../assets/cancel.png'
import time from '../assets/time.png'
// import done from '../assets/done.png'
import dropdown from '../assets/dropdown.png'


const List = () => {
  return (
    <div className='list'>
        <p className='list-title'>Summer Trip</p>
        <div className='progress'>
            <img src={time} alt='img'/>
            <p>In Progress</p>
        </div>
        <div className='category'>
            <p>Travelling</p>
        </div>
        <div className='security'>
            <p>Public</p>
            <img src={dropdown} alt='dropdown img'/>
        </div>
        <img src={cancel} alt='cancel'/>
    </div>
  )
}

export default List
