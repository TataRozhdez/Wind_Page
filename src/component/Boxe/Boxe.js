import React from 'react'
import MyButton from '../MyButton/MyButton'
import './Boxe.scss'

const Boxe = ({title, content, btn}) => {
  return (
    <div className='boxe'>
      <h3>{title}</h3>
      <p>{content}</p>
      <MyButton text={btn} color='#16A085' />
    </div>
  )
}

export default Boxe
