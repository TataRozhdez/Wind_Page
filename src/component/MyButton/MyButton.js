import React from 'react'
import './MyButton.scss'

const MyButton = ({text, color}) => {
  return (
    <div className='my-btn' style={{ border: `2px solid ${color}` }}>
      <a href='#!'>{text}</a>
    </div>
  )
}

export default MyButton
