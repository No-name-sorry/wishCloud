import React from 'react'
import classes from './Home.module.css'
import search from '../assets/search.png'

const Home = () => {
  return (
    <div className={classes.content}>
      <span className={`${classes.wish} ${classes.left}`}>Wish</span>
      <span className={`${classes.wish} ${classes.right}`}>Wish</span>
        <section className={classes.titleSection}>
          <h2 className={classes.motto}>Dream it. List it. Get it.</h2>
          <h1 className={classes.mainTitle}>WishCloud</h1>
          <div class={classes.search}>
              <input type="text" placeholder="Find a friend"/>
              <button>
                <img src={search} alt="navbar-search"/>
              </button>
          </div>
        </section>
      </div>
  )
}

export default Home
