import React from 'react'
import '../Pages/MyLists.css'
import List from '../Components/List.js'

const MyLists = () => {
  return (
    <div className='content-MyList'>
      <h1>My Lists</h1>
      <section className='main-content-MyList'>

        <div className='lists-div'>
          <List/>
          <List/>
          <List/>
        </div>
        
      </section>
    </div>
  )
}

export default MyLists
