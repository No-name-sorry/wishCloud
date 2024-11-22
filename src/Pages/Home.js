import React from 'react'
import '../Pages/Home.css'
import search from '../assets/search.png'

const Home = () => {
  return (
    <div className='content'>
      {/* <div className='flex'> */}
        <section className="wish-background">
          <div className="wish-container">
            <span className="wish-left">Wish</span>
          </div>
          <div className="wish-container">
            <span className="wish-right">Wish</span>
          </div>
        </section>

        <section className='title-section'>
          <h2 id="motto">Dream it. List it. Get it.</h2>
          <h1 id="main-title">WishCloud</h1>
          <div class="search">
              <input type="text" placeholder="Find a friend"/>
              <button>
                <img src={search} alt="navbar-search"/>
              </button>
          </div>
        </section>
      </div>
    // </div>
  )
}

export default Home
