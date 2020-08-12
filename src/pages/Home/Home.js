import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import MyButton from '../../component/MyButton/MyButton'
import Boxe from '../../component/Boxe/Boxe'
import Posts from '../../component/Posts/Posts'

import './Home.scss'

const boxes = [
  {
    title: 'About us',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus semper ligula, nec euismod massa cursus vitae. Proin blandit, eros eget aliquam interdum.',
    btn: 'Read more'
  },
  {
    title: 'why wind',
    content: 'Nunc ut fermentum orci. Praesent lobortis sapien in venenatis ultrices. Proin eu mi molestie, accumsan purus et, tempor dui. Sed nec leo ligula.',
    btn: 'learn more'
  },
  {
    title: 'cheap energy',
    content: 'Cras arcu enim, consequat vel tempus vel, pretium nec nisl. Cras tempus sem in arcu ultrices sollicitudin sit amet ac nibh. Ut fermentum venenatis diam.',
    btn: 'get it now'
  }
]

const Home = () => {
  return (
    <div className='home'>
      <div className='banner'>
        <div className='bck' />
        <Navbar />
        <h1>wind power</h1>
        <h3>Lorem, ipsum & dolor</h3>
        <MyButton text='Learn more' color='#FFFFFF' />
      </div>
      <div className='boxes'>
        {boxes.map((i, index) => (
          <Boxe key={index} title={i.title} content={i.content} btn={i.btn} />
        ))}
      </div>
      <Posts />
    </div>
  )
}

export default Home
