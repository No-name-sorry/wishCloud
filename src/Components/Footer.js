import React from 'react'
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <div className={classes.footer}>
        <hr/>
        <h1>Leave Feedback</h1>
        <p>Have we been helpful to you? Leave a review for our team!</p>
        <div className={classes.feedbackInput}>
            <input type="text" placeholder="Put your text here"/>
            <span>Send</span>
        </div>
        <div className={classes.footerDown}>
        <p>© 2024 WishCloud. All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer
