import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import Footer from '../../component/Footer/Footer'
import MyButton from '../../component/MyButton/MyButton'
import './Contact.scss'

const Contact = () => {
  return (
    <div className='contact'>
      <Navbar />
      <div className='baner'>
        <h1>Contact</h1>
      </div>
      <div className='content-txt'>
        <div>
          <h2>Keep in touch</h2>
          <p>In nec turpis sem. Ut pharetra erat justo, vitae dapibus ante laoreet nec. Vestibulum dapibus ante eu viverra tristique. Nunc massa leo, vulputate a ipsum sit amet, eleifend feugiat odio.
          <br /><br />
          contact@whitesqrtemp.com
          <br /><br />
          555 Lorem Ipsum Ave<br />
          Lipsum City, 00000<br />
          Country</p>
        </div>
        <form>
          <input type='text' placeholder='Full name' />
          <input type='email' placeholder='E-mail' />
          <textarea placeholder='Message' rows='5'/>
          <MyButton text='Send' color='#16A085' />
        </form>
        
      </div>
      <Footer />
    </div>
  )
}

export default Contact
