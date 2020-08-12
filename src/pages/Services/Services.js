import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import serviceImg from '../../resoureces/img/service.png'
import dot from '../../resoureces/img/dot.png'
import Footer from '../../component/Footer/Footer'
import './Services.scss'

const Services = () => {
  return (
    <div className='services'>
      <Navbar />
      <div className='baner'>
        <h1>Services</h1>
      </div>
      <div className='content-txt'>
        <h2>Main service</h2>
        <p>
          In nec turpis sem. Ut pharetra erat justo, vitae dapibus ante laoreet
          nec. Vestibulum dapibus ante eu viverra tristique. Nunc massa leo,
          vulputate a ipsum sit amet, eleifend feugiat odio. Integer at massa
          vel ligula placerat sollicitudin ut nec sapien. Etiam aliquet nulla a
          nulla lobortis tincidunt. Suspendisse elementum suscipit vulputate.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Aliquam luctus mollis augue, at tempor nibh
          imperdiet et. In pellentesque ante sit amet sapien elementum.
        </p>
        <div className='service-list'>
          <img className='wind-img' src={serviceImg} alt='service' />
          <ul>
            <li>
              <img src={dot} alt='' />
              <span>Lorem ipsum dolor sit amet</span>
            </li>
            <li>
              <img src={dot} alt='' />
              <span>Sed dapibus urna sed mattis</span>
            </li>
            <li>
              <img src={dot} alt='' />
              <span>Mauris nec mauris ultrices</span>
            </li>
            <li>
              <img src={dot} alt='' />
              <span>Suspendisse potenti</span>
            </li>
            <li>
              <img src={dot} alt='' />
              <span>Donec sapien ipsum, consectetur ac</span>
            </li>
            <li>
              <img src={dot} alt='' />
              <span>Donec eu placerat ligula</span>
            </li>
            <li>
              <img src={dot} alt='' />
              <span>Fusce non justo sed lorem blandit</span>
            </li>
            <li>
              <img src={dot} alt='' />
              <span>Cras vitae purus a eros dictum sagittis</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='gray-content'>
        <div>
          <h3>pharetra erat</h3>
          <p>
            Fusce vulputate nisi libero, eget posuere lectus vulputate in.
            Nullam vulputate mauris a porta dignissim. Nam et purus imperdiet,
            venenatis mi et, facilisis leo. Ut volutpat mi in tortor pharetra,
            in ullamcorper dolor suscipit. Nunc feugiat, enim sit amet rutrum
            blandit, quam magna vehicula diam, in dictum quam nunc ut.
          </p>
        </div>
        <div>
          <h3>Vestibulum</h3>
          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Integer vitae sagittis sapien. Praesent
            lectus ipsum, ullamcorper et fringilla quis, adipiscing a tortor.
            Duis mauris felis, tincidunt id lobortis eget, placerat non nibh.
            Nunc congue libero vel nulla congue placerat.{' '}
          </p>
        </div>
        <div>
          <h3>Nunc massa le</h3>
          <p>
            Donec pharetra felis sem, a viverra velit varius eu. Vestibulum
            lorem elit, vestibulum a neque tempus, blandit aliquet felis. Nunc
            pulvinar tellus eu lacus suscipit, sit amet volutpat lorem pharetra.
            Donec sit amet nulla felis. Sed non lacus fringilla, eleifend sem
            quis, tincidunt urna. Nulla facilisi. Morbi nec eleifend massa.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Services