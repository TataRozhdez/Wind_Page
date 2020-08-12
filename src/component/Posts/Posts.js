import React from 'react'
import './Posts.scss'
import img1 from '../../resoureces/img/1.jpg'
import img2 from '../../resoureces/img/2.jpg'
import img3 from '../../resoureces/img/3.jpg'

const post = [
  {
    img: img1,
    title: 'Ut consequat ante et mattis',
    text: 'Donec feugiat tristique tellus. Etiam sed placerat sem. Curabitur risus erat, tristique at leo et, ultrices aliquet lectus.'
  },
  {
    img: img2,
    title: 'Aenean dictum felis lacu',
    text: 'Suspendisse sed ornare orci. Phasellus sed vehicula turpis. Nullam rhoncus porta tortor, vitae blandit erat interdum ac.'
  },
  {
    img: img3,
    title: 'Curabitur aliquet dolor ac eleifend',
    text: 'Pellentesque at nisi placerat, molestie dui at, malesuada augue. Duis in bibendum arcu, nec molestie enim.'
  }
]

const Posts = () => {
  return (
    <div className='posts'>
      <h3>Recent posts</h3>
      <div className='post-container'>
        {
          post.map((i, index) => {
          return <a key={index} href='#!'>
            <img src={i.img} alt='img' />
            <h4>{i.title}</h4>
            <p>{i.text}</p>
          </a>
          })
        }
      </div>
    </div>
  )
}

export default Posts
