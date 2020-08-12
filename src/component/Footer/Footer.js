import React from 'react'
import logo from '../../resoureces/img/logo.png'
import './Footer.scss'

const link = [
  {
    title: 'about us',
    links: {
      'Company Overview': '#!',
      'Customers': '#!',
      'Testimonials': '#!'
    }
  },
  {
    title: 'Services',
    links: {
      'UI Design': '#!',
      'Consulting': '#!',
      'Support': '#!'
    }
  },
  {
    title: 'Blog',
    links: {
      'Latest posts': '#!',
      'Popular posts': '#!'
    }
  },
  {
    title: 'Contact',
    links: {
      'Online': '#!',
      'Addresses': '#!',
      'Map': '#!'
    }
  }
]

const linkItem = (item) =>  (
  Object.entries(item).map((i, index) =>
      <a href={i[1]} key={index}>{i[0]}</a>
    )
  )

const Footer = () => {
  return (
    <div className='footer'>
      {
        link.map((i, index) => (
          <div className='foot-item' key={index}>
            <h3>{i.title}</h3>
            {linkItem(i.links)}
          </div>
        ))
      }
      <img src={logo} alt='logo'/>
    </div>
  )
}

export default Footer
