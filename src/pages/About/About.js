import React from 'react'
import Footer from '../../component/Footer/Footer'
import Navbar from '../../component/Navbar/Navbar'
import './About.scss'

const About = () => {
  return (
    <div className='about'>
      <Navbar />
      <div className='baner'>
        <h1>About us</h1>
      </div>
      <div className='content-txt'>
        <h2>Awesome team</h2>
        <div className='paralax-about' />
        <p>In nec turpis sem. Ut pharetra erat justo, vitae dapibus ante laoreet nec. Vestibulum dapibus ante eu viverra tristique. Nunc massa leo, vulputate a ipsum sit amet, eleifend feugiat odio. Integer at massa vel ligula placerat sollicitudin ut nec sapien. Etiam aliquet nulla a nulla lobortis tincidunt. Suspendisse elementum suscipit vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam luctus mollis augue, at tempor nibh imperdiet et. In pellentesque ante sit amet sapien elementum.
        <br /><br />
        Vivamus ac tempus magna, sed tristique justo. Aliquam ullamcorper lorem sit amet orci condimentum porta. Sed a augue vel libero tincidunt ullamcorper. Suspendisse potenti. In pharetra mattis pharetra. Aliquam mattis eros in convallis tempus. Etiam a elit scelerisque, molestie mi et, imperdiet elit. Pellentesque vel lorem id ipsum gravida imperdiet eu id eros.</p>
      </div>
      <div className='gray-content'>
        <div>
          <h3>Why us?</h3>
          <p>Fusce vulputate nisi libero, eget posuere lectus vulputate in. Nullam vulputate mauris a porta dignissim. Nam et purus imperdiet, venenatis mi et, facilisis leo. Ut volutpat mi in tortor pharetra, in ullamcorper dolor suscipit. Nunc feugiat, enim sit amet rutrum blandit, quam magna vehicula diam, in dictum quam nunc ut.</p>
        </div>
        <div>
          <h3>Mission</h3>
          <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer vitae sagittis sapien. Praesent lectus ipsum, ullamcorper et fringilla quis, adipiscing a tortor. Duis mauris felis, tincidunt id lobortis eget, placerat non nibh. Nunc congue libero vel nulla congue placerat. </p>
        </div>
        <div>
          <h3>our ceo</h3>
          <p>Donec pharetra felis sem, a viverra velit varius eu. Vestibulum lorem elit, vestibulum a neque tempus, blandit aliquet felis. Nunc pulvinar tellus eu lacus suscipit, sit amet volutpat lorem pharetra. Donec sit amet nulla felis. Sed non lacus fringilla, eleifend sem quis, tincidunt urna. Nulla facilisi. Morbi nec eleifend massa.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
