import React from 'react'
import blogImg from '../../resoureces/img/blog.jpg'
import Navbar from '../../component/Navbar/Navbar'
import Footer from '../../component/Footer/Footer'
import './Blog.scss'

const Blog = () => {
  return (
    <div className='blog'>
      <Navbar />
      <div className='baner'>
        <h1>Blog</h1>
      </div>
      <div className='content-txt'>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse congue tincidunt molestie</h2>
        <p>In nec turpis sem. Ut pharetra erat justo, vitae dapibus ante laoreet nec. Vestibulum dapibus ante eu viverra tristique. Nunc massa leo, vulputate a ipsum sit amet, eleifend feugiat odio. Integer at massa vel ligula placerat sollicitudin ut nec sapien. Etiam aliquet nulla a nulla lobortis tincidunt. Suspendisse elementum suscipit vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam luctus mollis augue, at tempor nibh imperdiet et. In pellentesque ante sit amet sapien elementum.
        <br /><br />
        Cras eu est non magna fringilla lacinia ut eget est. Duis eros ante, commodo quis lacinia at, facilisis et mi. Integer a congue orci. Proin id dui at elit elementum vehicula. Aliquam convallis lacus metus, nec sodales tortor vulputate porta. Mauris tempor nisl quis imperdiet feugiat. Donec convallis massa sit amet rutrum ultricies. Integer semper tempus dignissim. Donec non eleifend diam. Sed id enim viverra, pellentesque metus quis, vestibulum leo.</p>
        <br /><br />
        <img className='technitian' src={blogImg} alt='technitian' />
        <span><i>Integer quis turpis id felis vulputate aliquam eu ut orci.</i></span>
        <br /><br />
        <p>Aliquam in ipsum lectus. Sed luctus felis nibh, id placerat velit tincidunt commodo. Praesent posuere sapien eu ornare rhoncus. Vestibulum placerat quam nibh, at auctor libero vestibulum id. Suspendisse ullamcorper, lacus eu rutrum pulvinar, augue nisi bibendum est, vitae volutpat lectus augue sit amet lectus. Suspendisse rutrum nunc ut erat lobortis scelerisque. Fusce aliquet tempus turpis, non mollis magna lacinia non. Proin auctor, tortor sed commodo placerat, lorem erat tristique massa, nec tempor risus sapien vitae ligula. Cras eget mauris sit amet augue interdum luctus id condimentum leo.
        <br /><br />
        Praesent euismod, risus quis cursus vehicula, nisi mi pellentesque urna, at venenatis neque justo sed odio. Praesent nisl magna, fermentum quis neque vitae, viverra varius nulla. Maecenas sit amet nisi velit. Vivamus dignissim accumsan tellus ac mattis.
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default Blog
